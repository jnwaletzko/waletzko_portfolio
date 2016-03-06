require "spec_helper"

describe SkillsController do
  describe "routing" do

    it "routes to #index" do
      get("/skills").should route_to("skills#index")
    end

    it "routes to #show" do
      get("/skills/1").should route_to("skills#show", :id => "1")
    end

    it "routes to #create" do
      post("/skills").should route_to("skills#create")
    end

    it "routes to #update" do
      put("/skills/1").should route_to("skills#update", :id => "1")
    end

  end
end
