require 'spec_helper'

describe ExperiencesController do

  let(:json) { JSON.parse(response.body) }
  let!(:experience) { create(:experience) }

  describe 'index' do
    before(:each) do
      get :index, format: :json
    end

    it { expect(json.collect{|l| l["title"]}).to include(experience.title) }
    it { expect(response).to be_success }
  end

  describe 'show' do
    before(:each) do
      get :show, id: experience.id, format: :json
    end

    it { expect(response).to be_success }
    it { expect(json['title']).to eq(experience.title)}
    it { expect(json['company']).to eq(experience.company)}
    it { expect(json['about']).to eq(experience.about)}
    it { expect(json['description']).to eq(experience.description)}
  end

  describe 'create' do
    context "with valid attributes" do
      it "creates a new experience" do
        expect {
          post :create, experience: attributes_for(:experience), :format => :json
        }.to change(Experience, :count).by(1)
      end
    end
  end
end
