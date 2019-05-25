# Georgia Election Money Project Docker Environment

Reusable environment for data loader and Postgres database.

File structure:
- `docker-compose.yml`: Configuration file for [Docker Compose](https://docs.docker.com/compose/).
- `jupyter`: Adds some Python packages to the default Jupyter image, then runs a notebook with the data loader and a sample CSV file.
- `db`: Runs the default PostgreSQL image with a custom script for setting up the electiomoney database.

To set up:
- Install Docker and Docker Engine. On a Mac or Windows machine, just install [Docker Desktop](https://www.docker.com/products/docker-desktop).
- Run `docker-compose up --detach`. The `jupyter` image is built, and both containers are started.
- Run `docker-compose logs` to monitor the initialization of both containers. Postgres will start and initialize the database using the script in `db/sql`. It will then restart. When the Jupyter container is initialized, it will print something very close to this:

```
jupyter_1  |     To access the notebook, open this file in a browser:
jupyter_1  |         file:///home/jovyan/.local/share/jupyter/runtime/nbserver-8-open.html
jupyter_1  |     Or copy and paste one of these URLs:
jupyter_1  |         http://(4ed965f644cb or 127.0.0.1):8888/?token=d2f573d940179b4df02aecb8426dd1c5e9f7c79a8f6bc3c4
```

Copy the `http://` URL into your browser. Replace the part in parentheses with `127.0.0.1` or `localhost`. Jupyter should be launched in the `jupyter` directory. Select the `.ipynb` file. Verify the connection to the database by running the cell that creates the key variable and the one after it that creates the connection. Run `Kernel -> Restart and Run All` to test the whole notebook.

More information about this project is found [here](https://github.com/jay-hood/electionmoney).