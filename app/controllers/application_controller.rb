class ApplicationController < ActionController::Base
#     Railsアプリとは別のアプリから
# XHRでリクエストするAPIとして利用する場合は、CSRFトークンの検証ができない
    skip_before_action :verify_authenticity_token

    helper_method :login!, :current_user

    def login!
        session[:user_id] = @user.id
    end

    def current_user
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end
end
