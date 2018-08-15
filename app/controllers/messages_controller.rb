class MessagesController < ApplicationController
	def index #action index
		@message = Message.new
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
			redirect_to root_path
		end
	end

	def edit
	end

	def show
		@message = Message.find(params[:id])
	end

	def update 
	end

	def destroy
	end

end

