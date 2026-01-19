class Document < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :folder, optional: true

  enum :permission, { private_file: 0, public_file: 1, shared_file: 2 }, validate: true

  validates :title, presence: true
end
