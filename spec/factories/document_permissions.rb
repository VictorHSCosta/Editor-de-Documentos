FactoryBot.define do
  factory :document_permission do
    association :document
    association :user
    role { :viewer }
  end
end
