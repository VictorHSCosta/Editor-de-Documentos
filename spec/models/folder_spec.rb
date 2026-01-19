require 'rails_helper'

RSpec.describe Folder, type: :model do
  it "has a valid factory" do
    expect(FactoryBot.build(:folder)).to be_valid
  end

  it "is invalid without a title" do
    folder = FactoryBot.build(:folder, title: nil)
    expect(folder).not_to be_valid
    expect(folder.errors[:title]).to include("can't be blank")
  end

  it "is invalid with an invalid permission" do
    folder = FactoryBot.build(:folder, permission: :unknown)
    expect(folder).not_to be_valid
    expect(folder.errors[:permission]).to include("is not included in the list")
  end

  it "belongs to a user" do
    user = FactoryBot.create(:user)
    folder = FactoryBot.create(:folder, author: user)
    expect(folder.author).to eq(user)
  end

  it "has many documents" do
    folder = FactoryBot.create(:folder)
    document1 = FactoryBot.create(:document, folder: folder)
    document2 = FactoryBot.create(:document, folder: folder)

    expect(folder.documents).to include(document1, document2)
    expect(folder.documents.count).to eq(2)
  end

  it "is invalid without an author" do
    folder = FactoryBot.build(:folder, author: nil)
    expect(folder).not_to be_valid
    expect(folder.errors[:author]).to include("must exist")
  end
end
