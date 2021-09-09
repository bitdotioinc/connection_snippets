'''Upload data to a bit.io repo using Python'''

import bitdotio

# Connect to bit.io
b = bitdotio.bitdotio(<YOUR_BITIO_KEY>)

# From file
# Download demo csv here:
# https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv
# Upload to 'my_new_repo' with table name 'video_game_sales_csv'
with open('video-game-sales.csv', 'r', encoding='utf-8') as f:
    b.create_import_file(f, 'my_new_repo', 'video_game_sales_csv')

# From URL
# Upload to 'my_new_repo' with table name 'video_game_sales_url'
url = 'https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv'
import_url = bitdotio.model.import_url.ImportUrl(url, 'video_game_sales_url', 'my_new_repo')
b.create_import_url(import_url=import_url)
