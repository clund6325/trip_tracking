5.times do
  user = User.create(
    email: Faker::Internet.email,
    password: Faker::ChuckNorris.fact
  )
end
5.times do |i|
  trip = Trip.create(
    name: Faker::Address.country,
    user_id: i
  )
end
5.times do |i|
  location = Location.create(
    loc_name: Faker::Nation.capital_city,
    trip_id: i
  )
end
5.times do |i|
  address = Address.create(
    street: Faker::Address.street_address,
    state: Faker::Address.state,
    city: Faker::Address.city,
    country: Faker::Address.country,
    region: Faker::Address.time_zone,
    zip: Faker::Address.zip,
    location_id: i
  )
end
puts 'Data Seeded'