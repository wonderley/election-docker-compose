#!/bin/sh

docker run -d -p 3306:3306 -it --name db -e MYSQL_ROOT_PASSWORD=pw -e MYSQL_DATABASE=electionmoney -e SOCKET=tcp mysql

#docker run -p 3306:3306 -it --name electionmoney-mysql -v `pwd`/sql:/docker-entrypoint-initdb.d/ -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=electionmoney mysql