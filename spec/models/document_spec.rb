require 'rails_helper'

RSpec.describe Document, type: :model do
  it 'has a valid factory' do
    expect(FactoryBot.build(:document)).to be_valid
  end

  it 'is invalid without a title' do
    document = FactoryBot.build(:document, title: nil)
    expect(document).not_to be_valid
    expect(document.errors[:title]).to include("can't be blank")
  end

  it 'is invalid with an invalid permission' do
    document = FactoryBot.build(:document, permission: :unknown)
    expect(document).not_to be_valid
    expect(document.errors[:permission]).to include("is not included in the list")
  end

  it 'belongs to a user' do
    user = FactoryBot.create(:user)
    document = FactoryBot.create(:document, author: user)
    expect(document.author).to eq(user)
  end

  it "is invalid without an author" do
    document = FactoryBot.build(:document, author: nil)
    expect(document).not_to be_valid
    expect(document.errors[:author]).to include("must exist")
  end
end
