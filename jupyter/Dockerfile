FROM jupyter/datascience-notebook
USER root
RUN sudo apt-get update
RUN apt-get install -y build-essential python-dev libapache2-mod-wsgi-py3 libmysqlclient-dev
RUN pip install mysqlclient
EXPOSE 8888
CMD jupyter notebook --allow-root work