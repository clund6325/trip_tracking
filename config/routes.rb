Rails.application.routes.draw do
  root 'users#index'

  resources :users do
    resources :trips
  end
  resources :trips do
    resources :locations
  end
  resources :locations do
    resources :addresses
  end
  
end
