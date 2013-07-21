require 'sinatra'
require 'sinatra/assetpack'
require 'json'

class App < Sinatra::Base
	register Sinatra::AssetPack

  assets {
    serve '/css', {:from => 'assets/css'}
    serve '/js', {:from => 'assets/js'}
    serve '/images', {:from => 'assets/images'}
    serve '/fonts', {:from => 'assets/fonts'}

    css :app, ['css/app.css']
    js :app, ['js/app.js']

    js_compression :yui
  }

  set :scss, { :load_paths => [ "#{App.root}/assets/css" ] }

  proverbs = JSON.parse(File.read('proverbs.json'), :symbolize_names => true)

  get '/' do
    erb :index
  end

  get '/proverbs' do
    content_type :json
    proverbs.to_json
  end
end
