class CreateDocuments < ActiveRecord::Migration[8.1]
  def change
    create_table :documents do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.integer :permission, null: false
      t.text :content
      t.integer :link_id
      t.string :password_digest

      t.timestamps
    end
  end
end
