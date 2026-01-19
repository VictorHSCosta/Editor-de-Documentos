FactoryBot.define do
  factory :folder do
    title { "MyFolder" }
    permission { :private_folder }
    association :author, factory: :user
  end
end
