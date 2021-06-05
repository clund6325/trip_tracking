class AddressesController < ApplicationController
  before_action :set_location

  def index
    @addresses = Address.all
    render component: 'Addresses', props:{ addresses: @addresses, location: @location }
   end

   def show
    @address = Address.find(params[:id])
    render component: 'Address', props: { address: @address, location: @location }
   end

   def new
    @address = Address.new
    render component: 'AddressNew', props: { address: @address, location: @location }
   end
   
   def edit
     @address = Address.find(params[:id])
    render component: 'AddressEdit', props: { address: @address, location: @location }
   end
   
   def create
     @address = Address.new(address_params)
     if @address.save
      
     else
       render component: 'AddressNew', props: { address: @address, location: @location }
     end
   end
   
   def update
     @address = Address.find(params[:id])
     if @address.update(address_params)

     else
       render component: 'AddressEdit', props: { address: @address, location: @location }
     end
   
   def destroy
     Address.find(params[:id]).destroy
   end

   private
     def address_params
       params.require(:address).permit(:street, :state, :city, :country, :region, :zip)
     end
    
     def set_location
      @location = Location.find(params[:id])
     end 
    
  end

