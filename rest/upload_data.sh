# Upload data to a bit.io repo using the REST API
# Still figuring this one out

# From file
# Download demo csv here:
# https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv
# Upload to 'my_new_repo' with table name 'video_game_sales_csv'
curl -i -X POST \
--header 'Authorization: Bearer <YOUR_BITIO_KEY>' \
--header "Content-Disposition: attachment;filename='video-game-sales.csv'" \
--data-binary @"<YOUR_PATH>/video-game-sales.csv" \
https://import.bit.io/<YOUR_USERNAME>/my_new_repo/video_game_sales_csv

# From URL
# Upload to 'my_new_repo' with table name 'video_game_sales_url'

