class Document < ApplicationRecord
  belongs_to :user

  has_secure_password

  PERMISSIONS = %w[private public shared].freeze

  validates :title, presence: true
  validates :permission, presence: true, inclusion: { in: PERMISSIONS }
end
