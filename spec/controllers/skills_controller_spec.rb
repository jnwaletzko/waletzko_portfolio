require 'spec_helper'

describe SkillsController do

  let(:json) { JSON.parse(response.body) }
  let!(:skill) { create(:skill) }

  describe 'index' do
    before(:each) do
      get :index, format: :json
    end

    it { expect(json.collect{|l| l["name"]}).to include(skill.name) }
    it { expect(response).to be_success }
  end

  describe 'show' do
    before(:each) do
      get :show, id: skill.id, format: :json
    end

    it { expect(response).to be_success }
    it { expect(json['name']).to eq(skill.name)}
    it { expect(json['level']).to eq(skill.level)}
  end

  describe 'create' do
    context "with valid attributes" do
      it "creates a new skill" do
        expect {
          post :create, skill: attributes_for(:skill), :format => :json
        }.to change(Skill, :count).by(1)
      end
    end
  end
end
