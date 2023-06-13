#!/bin/bash
#### run file by running bash create-projects.sh
echo 'input name of directory;'
read filename
echo 'name of project (hyphen case);'
read projectname
mkdir $filename
cd $filename
# touch $filename
npm create vite@latest $projectname --template react