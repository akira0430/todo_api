Rails.application.routes.draw do
  post '/signup', to: 'registrations#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: "sessions#logout"
  get '/logged_in', to: "sessions#logged_in"
  root to: "static#home"
  namespace :api do
    namespace :v1 do
      resources :todos     
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
