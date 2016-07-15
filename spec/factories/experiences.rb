# == Schema Information
#
# Table name: experiences
#
#  id          :integer          not null, primary key
#  title       :string
#  company     :string
#  about       :string
#  description :string
#  start_date  :datetime
#  end_date    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :experience do
    title "MyString"
    company "MyString"
    about "MyString"
    description "MyString"
    start_date "2016-03-05 10:27:34"
    end_date "2016-03-05 10:27:34"
  end
end
