Rails.application.routes.draw do
	root 'messages#index' #ACTION INDEX IN CONTROLLER MESSAGES
	resources :messages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
