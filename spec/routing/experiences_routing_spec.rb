require "spec_helper"

describe ExperiencesController do
  describe "routing" do

    it "routes to #index" do
      get("/experiences").should route_to("experiences#index")
    end

    it "routes to #show" do
      get("/experiences/1").should route_to("experiences#show", :id => "1")
    end

    it "routes to #create" do
      post("/experiences").should route_to("experiences#create")
    end

    it "routes to #update" do
      put("/experiences/1").should route_to("experiences#update", :id => "1")
    end

  end
end
