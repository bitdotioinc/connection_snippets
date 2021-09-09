'''Query from a bit.io repo using Python'''

import bitdotio

# Connect to bit.io
b = bitdotio.bitdotio(<YOUR_BITIO_KEY>)

# Get psycopg2 cursor
with b.get_connection() as conn:
    cur = conn.cursor()
    cur.execute('SELECT date, name, local_price FROM "bitdotio/big_mac_index"."big_mac_index"')
    print(cur.fetchone())