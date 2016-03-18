require "spec_helper"

describe SkillsController do
  describe "routing" do

    it "routes to #index" do
      expect(get: "/skills").to route_to("skills#index")
    end

    it "routes to #show" do
      expect(get: "/skills/1").to route_to("skills#show", id: "1")
    end

    it "routes to #create" do
      expect(post: "/skills").to route_to("skills#create")
    end

    it "routes to #update" do
      expect(put: "/skills/1").to route_to("skills#update", id: "1")
    end

  end
end
