require 'rails_helper'

RSpec.describe DocumentPermission, type: :model do
  it "has a valid factory" do
    expect(FactoryBot.build(:document_permission)).to be_valid
  end

  it "is invalid without a document" do
    permission = FactoryBot.build(:document_permission, document: nil)
    expect(permission).not_to be_valid
    expect(permission.errors[:document]).to include("must exist")
  end

  it "is invalid without a user" do
    permission = FactoryBot.build(:document_permission, user: nil)
    expect(permission).not_to be_valid
    expect(permission.errors[:user]).to include("must exist")
  end
end
