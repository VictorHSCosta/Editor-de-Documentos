FactoryBot.define do
  factory :folder_permission do
    association :folder
    association :user
    role { :viewer }
  end
end
