require 'rss'
require 'open-uri'

module AppUrl
  extend self

  CONFIG_FILE = File.expand_path('../../config/urls.yml', __FILE__)
  @@app_urls = YAML.load(File.read(CONFIG_FILE))
  @@urls = @@app_urls[Rails.env]

  def current_url
    @@urls['urls']
  end
end
