json.array!(@favourites) do |favourite|
  json.extract! favourite, :id, :content, :user_id
  json.url favourite_url(favourite, format: :json)
end
