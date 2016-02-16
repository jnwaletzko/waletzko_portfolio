require 'test_helper'

class EducationsControllerTest < ActionController::TestCase
  test "index should be successful" do
    get :index, :format => :json
    assert_response :success
  end

  test "index should return all educations" do
    get :index, :format => :json
    body = JSON.parse(response.body)
    assert body.count, 2
  end

  test "show should be successful" do
    get :show, id: 1, :format => :json
    assert_response :success
  end

  test "show should return first education" do
    get :show, id: 1, :format => :json
    body = JSON.parse(response.body)
    assert body['title'], 'Bachelor of Arts'
  end

  test "create should create an education" do
    assert_difference('Education.count') do
      post :create, education: {title: "Test education", location: "test location", description: "test description"}, :format => :json
    end
  end
end
