class Headline
  attr_reader :title, :content

  def initialize(opts)
    @title = opts[:title]
    @content = opts[:content]
  end
end
