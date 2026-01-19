require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    expect(FactoryBot.build(:user)).to be_valid
  end

  it 'has many documents' do
    user = FactoryBot.create(:user)
    document1 = FactoryBot.create(:document, author: user)
    document2 = FactoryBot.create(:document, author: user)

    expect(user.documents).to include(document1, document2)
    expect(user.documents.count).to eq(2)
  end
end
