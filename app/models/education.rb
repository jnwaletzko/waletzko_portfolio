# == Schema Information
#
# Table name: educations
#
#  id          :integer          not null, primary key
#  title       :string
#  location    :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Education < ActiveRecord::Base
end
