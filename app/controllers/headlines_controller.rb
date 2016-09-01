require 'app_url'

class HeadlinesController < ApplicationController

  def index
    url = 'http://rss.cnn.com/rss/cnn_us.rss'

    open(AppUrl.current_url) do |rss|
      feed = RSS::Parser.parse(rss)
      @title = feed.channel.title
      @headlines = feed.items.map{|item| Headline.new(title: item.title, content: item.guid.content)}
      @favourites = current_user.favourites
    end
 
  end

end
