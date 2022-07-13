json.artist do 
    json.extract! @artist, :id, :name, :bio, :picture_url
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do 
            json.extract! album, :id, :title, :picture_url
        end
    end
end

json.tracks do 
    @artist.tracks.limit(5).each do |track|
        json.set! track.id do
            json.extract! track, :id, :name, :audio_url, :duration, :album_id, :artist_id
        end
    end
end