class ExperiencesController < ApplicationController
  protect_from_forgery with: :exception
  before_action :find_experience, only: [:show, :update]
  # skip_before_action :verify_authenticity_token

  respond_to :json
  def index
    @experiences = Experience.all
    respond_with @experiences
  end

  def create
    respond_with Experience.create(experience_params)
  end

  def show
    respond_with @experience
  end

  def update
    respond_with @experience.update(experience_params)
  end

  private def find_experience
    @experience = Experience.find(params[:id])
  end

  private def experience_params
    params.require(:experience).permit(:title, :company, :about, :description, :start_date, :end_date)
  end
end
