class Folder < ApplicationRecord
  belongs_to :author, class_name: "User"
  has_many :documents, dependent: :destroy

  enum :permission, { private_folder: 0, public_folder: 1, shared_folder: 2 }, validate: true

  validates :title, presence: true
end
