class LocationsController < ApplicationController
  before_action :set_trip
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  def index
    @locations = @trip.locations
    render component: 'Locations', props:{locations: @locations, trip: @trip}
  end

  def show
    render component: 'Location', props: {location: @location, trip: @trip}
  end

  def new
    @location = Location.new
    render component: 'LocationNew', props: {location: @location, trip: @trip}
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      redirect_to root_path
    else
      render component: 'LocationNew', props: {location: @location, trip: @trip}
    end
  end

  def edit
    render component: 'LocationEdit', props: {location: @location, trip: @trip}
  end

  def update
    if @location.update(location_params)
      redirect_to root_path
    else
      render component: 'LocationEdit', props: {location: @location, trip: @trip}
    end
  end

  def destroy
    @location.destroy
    redirect_to root_path
  end

  private
    def set_trip
      @trip = Trip.find(params[:trip_id])
    end

    def set_location
      @location = Location.find(params[:id])
    end
    
    def location_params
      params.require(:location).permit(:loc_name)
    end
end
