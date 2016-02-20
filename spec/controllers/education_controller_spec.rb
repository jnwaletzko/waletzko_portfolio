require 'spec_helper'

describe EducationsController do

  describe 'index' do
    before(:each) do
      get :index, format: :json
    end

    # it { expect(assigns(:educations)).to match_array educations }
    it { expect(response).to be_success }
  end
end
