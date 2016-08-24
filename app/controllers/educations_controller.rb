class EducationsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :find_education, only: %w[show update]
  skip_before_action :verify_authenticity_token

  respond_to :json
  def index
    @educations = Education.all
    respond_with @educations
  end

  def create
    respond_with Education.create(post_params)
  end

  def show
    respond_with @education
  end

  def update
    respond_with @education.update(post_params)
  end

  private def find_education
    @education = Education.find(params[:id])
  end

  private def post_params
    params.require(:education).permit(:title, :location, :description)
  end
end
