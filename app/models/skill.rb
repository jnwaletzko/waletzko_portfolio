# == Schema Information
#
# Table name: skills
#
#  id         :integer          not null, primary key
#  name       :string
#  level      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# {"name":"C#","level":"7"},
# {"name":"VB.Net","level":"6"},
# {"name":"Ruby","level":"4"},
# {"name":"Rails","level":"4"},
# {"name":"SQL","level":"6"},
# {"name":"Javascript","level":"5"},
# {"name":"WPF","level":"4"},
# {"name":"Java","level":"3"}

class Skill < ActiveRecord::Base
end
