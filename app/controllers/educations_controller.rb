class EducationsController < ApplicationController
  protect_from_forgery with: :exception

  respond_to :json
  def index
    respond_with Education.all
  end

  def create
    respond_with Education.create(post_params)
  end

  def show
    respond_with Education.find(params[:id])
  end

  private
  def post_params
    params.require(:education).permit(:title, :location, :description)
  end
end
