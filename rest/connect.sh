'''Connect to bit.io using REST API'''

curl --request GET \
     --url https://api.bit.io/api/v1beta/repos/ \
     --header 'Authorization: Bearer <YOUR_BITIO_KEY>' \
     --header 'Accept: application/json'