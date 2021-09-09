'''Upload data to a bit.io repo using Python'''

import bitdotio

# Connect to bit.io
b = bitdotio.bitdotio(<YOUR_BITIO_KEY>)

# From file
# Download demo csv here:
# https://docs.bit.io/docs/uploading-data#:~:text=video-game-sales.csv
with open('video-game-sales.csv', 'r', encoding='utf-8') as f:
    b.create_import_file(f, 'my_new_repo', table_name='video_game_sales_csv')

# From URL
import_url = bitdotio.model.import_url.ImportUrl('https://storage.googleapis.com/bitdotio-demo-datasets/video-game-sales.csv',
                                                 'video_game_sales_url', 
                                                 'my_new_repo')
b.create_import_url(import_url=import_url)
