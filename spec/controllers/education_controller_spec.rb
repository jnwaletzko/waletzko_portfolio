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
end
