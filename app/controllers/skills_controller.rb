class SkillsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :find_skill, only: %w[show update]
  # skip_before_action :verify_authenticity_token

  respond_to :json
  def index
    @skills = Skill.all
    respond_with @skills
  end

  def create
    respond_with Skill.create(skill_params)
  end

  def show
    respond_with @skill
  end

  def update
    respond_with @skill.update(skill_params)
  end

  private def find_skill
    @skill = Skill.find(params[:id])
  end

  private def skill_params
    params.require(:skill).permit(:title, :location, :description)
  end
end
