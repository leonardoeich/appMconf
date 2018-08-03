class MessagesController < ApplicationController
	def index #action index
		@messages = Message.all
	end

	def new
		@message = Message.new
		@messages = Message.all
	end


	def create
		message_params = params.require(:message).permit(:content)
		@message = Message.new(message_params)
		if @message.save
			redirect_to new_message_path
		end
	end
end