FactoryBot.define do
  factory :user do
    email { "user#{SecureRandom.hex(4)}@mail.com" }
    password { "password" }
    password_confirmation { "password" }
  end
end
