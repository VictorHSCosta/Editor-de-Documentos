FactoryBot.define do
  factory :document do
    title { "Sample Document" }
    content { "This is a sample document content." }
    permission { :private_file }
    association :author, factory: :user
    association :folder
  end
end
