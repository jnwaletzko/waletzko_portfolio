class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.string :title
      t.string :location
      t.string :description

      t.timestamps null: false
    end
  end
end
