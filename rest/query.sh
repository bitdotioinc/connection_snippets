# Query data on bit.io using REST API

curl --request POST \
     --url https://api.bit.io/api/v1beta/query/ \
     --header "Authorization: Bearer <YOUR_BITIO_KEY>" \
     --header "Accept: application/json" \
     --header "Content-Type: application/json" \
     --data '
{
     "query_string": "SELECT date, name, local_price FROM \"bitdotio/big_mac_index\".\"big_mac_index\";"
}
'