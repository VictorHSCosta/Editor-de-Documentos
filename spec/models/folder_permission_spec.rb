require 'rails_helper'

RSpec.describe FolderPermission, type: :model do
  it 'has a valid factory' do
    expect(FactoryBot.build(:folder_permission)).to be_valid
  end

  it 'belongs to a folder' do
    folder = FactoryBot.create(:folder)
    user = FactoryBot.create(:user)
    folder_permission = FactoryBot.create(:folder_permission, folder: folder, user: user)

    expect(folder_permission.folder).to eq(folder)
  end

  it 'belongs to a user' do
    folder = FactoryBot.create(:folder)
    user = FactoryBot.create(:user)
    folder_permission = FactoryBot.create(:folder_permission, folder: folder, user: user)

    expect(folder_permission.user).to eq(user)
  end

  it 'is invalid without a role' do
    folder_permission = FactoryBot.build(:folder_permission, role: nil)
    expect(folder_permission).not_to be_valid
    expect(folder_permission.errors[:role]).to include("is not included in the list")
  end
end
