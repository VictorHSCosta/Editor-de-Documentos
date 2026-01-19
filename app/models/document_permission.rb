class DocumentPermission < ApplicationRecord
  belongs_to :document
  belongs_to :user

  enum :role, { viewer: 0, editor: 1 }
end
