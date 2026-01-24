class CreateFolders < ActiveRecord::Migration[8.1]
  def change
    create_table :folders do |t|
      t.string :title
      t.integer :permission
      t.references :author, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
