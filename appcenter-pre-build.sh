#!/usr/bin/env bash
# Creates an .env from existing env files for use with react-native-config 
# based on BUILD_FLAVOR environmental variable supplied to AppCenter
if [  "$BUILD_FLAVOR" == "prod" ]; then
   cp .env.prod .env
elif [  "$BUILD_FLAVOR" == "stage" ]; then
   cp .env.stage .env
else
   cp .env.dev .env
fi

printf "\n.env created with contents:\n"
cat .env