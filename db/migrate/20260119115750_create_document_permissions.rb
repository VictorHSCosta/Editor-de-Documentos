class CreateDocumentPermissions < ActiveRecord::Migration[8.1]
  def change
    create_table :document_permissions do |t|
      t.references :document, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :role, null: false

      t.timestamps
    end
  end
end
