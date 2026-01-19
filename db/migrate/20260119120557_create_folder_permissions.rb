class CreateFolderPermissions < ActiveRecord::Migration[8.1]
  def change
    create_table :folder_permissions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :folder, null: false, foreign_key: true
      t.integer :role, null: false

      t.timestamps
    end
  end
end
