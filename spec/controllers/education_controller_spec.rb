require 'spec_helper'

describe EducationsController do

  let(:json) { JSON.parse(response.body) }
  let!(:education) { create(:education) }

  describe 'index' do
    before(:each) do
      get :index, format: :json
    end

    it { expect(json.collect{|l| l["title"]}).to include(education.title) }
    it { expect(response).to be_success }
  end

  describe 'show' do
    before(:each) do
      get :show, id: education.id, format: :json
    end

    it { expect(response).to be_success }
    it { expect(json['title']).to eq(education.title)}
    it { expect(json['location']).to eq(education.location)}
    it { expect(json['description']).to eq(education.description)}
  end

  describe 'create' do
    context "with valid attributes" do
      it "creates a new education" do
        expect {
          post :create, education: attributes_for(:education), :format => :json
        }.to change(Education, :count).by(1)
      end
    end
  end
end
