'''Create a bit.io repo using Python'''

import bitdotio

# Connect to bit.io
b = bitdotio.bitdotio(<YOUR_BITIO_KEY>)

# Construct a repo object
r = bitdotio.model.repo.Repo(name='my_new_repo',
                             description='My new repository.',
                             is_private=True)

# Create the repo
b.create_repo(repo=r)

# Confirm repo creation
b.list_repos()

