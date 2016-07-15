require "spec_helper"

describe ExperiencesController do
  describe "routing" do

    it "routes to #index" do
      expect(get: "/experiences").to route_to("experiences#index")
    end

    it "routes to #show" do
      expect(get: "/experiences/1").to route_to("experiences#show", id: "1")
    end

    it "routes to #create" do
      expect(post: "/experiences").to route_to("experiences#create")
    end

    it "routes to #update" do
      expect(put: "/experiences/1").to route_to("experiences#update", id: "1")
    end

  end
end
