
class Address < ApplicationRecord
  belongs_to :location
end

validates :street, :state, :city, :country, :region, :zip, presence: true