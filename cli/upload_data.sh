# Upload data to a bit.io repo using the CLI

# From file
# Download demo csv here:
# https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv
# Upload to 'my_new_repo' with table name 'video_game_sales_csv'
bit -k <YOUR_BITIO_KEY> import file -r my_new_repo -f video-game-sales.csv -t video_game_sales_csv 

# From URL
# Upload to 'my_new_repo' with table name 'video_game_sales_url'
URL=https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv
bit -k <YOUR_BITIO_KEY> import url -r my_new_repo -u $URL -t video_game_sales_url