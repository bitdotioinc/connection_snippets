# Query from a bit.io repo using the CLI

SQL="SELECT date, name, local_price FROM \"bitdotio/big_mac_index\".\"big_mac_index\"" 
bit -k <YOUR_BITIO_KEY> query -q $SQL

# Pipe a query to bit
echo  "SELECT date, name, local_price FROM \"bitdotio/big_mac_index\".\"big_mac_index\"" \
| bit -k <YOUR_BITIO_KEY> query -qf -