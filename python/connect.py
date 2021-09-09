'''Connect to bit.io in Python'''

import bitdotio

# Create bit.io connection client object b
b = bitdotio.bitdotio(<YOUR_BITIO_KEY>)

# You can use the b object directly, here we list repos
b.list_repos()

# The b object also provides access to a psycopg2 cursor for arbitrary SQL 
conn = b.get_connection()
cur = conn.cursor()