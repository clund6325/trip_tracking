# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  user = User.create(
    email: Faker::Internet.email,
    password: Faker::ChuckNorris.fact
  )
end

5.times do
  trip = Trip.create(
    name: Faker::Address.country
  )
end
5.times do
  location = Location.create(
    loc_name: Faker::Nation.capital_city
  )
end
5.times do
  address = Address.create(
    street: Faker::Address.street_address,
    state: Faker::Address.state,
    city: Faker::Address.city,
    country: Faker::Address.country,
    region: Faker::Address.time_zone,
    zip: Faker::Address.zip
  )
end

puts 'Data Seeded'