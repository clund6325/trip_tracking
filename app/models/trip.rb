class Trip < ApplicationRecord
  belongs_to :user
  has_many :locations, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: true
end
