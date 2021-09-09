# Create a repo on bit.io using REST API
# Note: currently has a bug, is being fixed

curl --request POST \
     --url https://api.bit.io/api/v1beta/repos/ \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'Authorization: Bearer <YOUR_BITIO_KEY>' \
     --data '
     {
         "name": "my_new_repo",
         "description": My new repo."
     }
     '