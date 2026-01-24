class FolderPermission < ApplicationRecord
  belongs_to :folder
  belongs_to :user

  enum :role, { viewer: 0, editor: 1 }, validate: true
end
