require 'test_helper'

class EducationsControllerTest < ActionController::TestCase
  test "should be succesful" do
    get :index, :format => :json
    assert_response :success
  end

  test "should return all educations" do
    get :index, :format => :json
    body = JSON.parse(response.body)
    assert body.count, 2
  end


end
