base64 -d <<< "CiBfICAgXyAgICAgICAgICAgICAgICBfX19fX19fX19fXyAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgICAgXyAgICAgICAgICAgIF8gCnwgfCB8IHwgICAgICAgICAgICAgIHxfICAgX3wgX19fIFwgICAgICAgICAgICAgICAvICBfXyBcICAgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8CnwgfF98IHwgX18gX19fICAgX19fX18gfCB8IHwgfF8vIC8gX19fICBfX18gXyBfXyB8IC8gIFwvXyBfXyBfXyBfICBfX198IHwgX19fX18gIF9ffCB8CnwgIF8gIHwvIF9gIFwgXCAvIC8gXyBcfCB8IHwgX19fIFwvIF8gXC8gXyBcICdfIFx8IHwgICB8ICdfXy8gX2AgfC8gX198IHwvIC8gXyBcLyBfYCB8CnwgfCB8IHwgKF98IHxcIFYgLyAgX18vfCB8X3wgfF8vIC8gIF9fLyAgX18vIHwgfCB8IFxfXy9cIHwgfCAoX3wgfCAoX198ICAgPCAgX18vIChffCB8ClxffCB8Xy9cX18sX3wgXF8vIFxfX19cX19fL1xfX19fLyBcX19ffFxfX198X3wgfF98XF9fX18vX3wgIFxfXyxffFxfX198X3xcX1xfX198XF9fLF98CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCg=="

echo " ---------- Install script ----------"

echo "Welcome to the HaveIBeenCracked installation script!"
echo "This script will guide you through the installation process."
echo "Please make sure you have Docker and Docker Compose installed. If you want leave default values, just press Enter."
echo ""

echo " ---------- Configuration ----------"

read -p "Enter the port for the docker container (default: 1569): " DOCKER_PORT
DOCKER_PORT=${DOCKER_PORT:-1569}
read -p "Enter address for the MySQL server (default: localhost): " MYSQL_HOST
MYSQL_HOST=${MYSQL_HOST:-localhost}
read -p "Enter the port where MySQL server is running (default: 3306): " MYSQL_PORT
MYSQL_PORT=${MYSQL_PORT:-3306}
read -p "Enter the MySQL user (default root): " MYSQL_USER
MYSQL_USER=${MYSQL_USER:-root}
read -sp "Enter the MySQL password: " MYSQL_PASSWORD
read -p "Enter the MySQL database (default: HaveIBeenCracked-Public): " MYSQL_DATABASE
MYSQL_DATABASE=${MYSQL_DATABASE:-HaveIBeenCracked-Public}

cat > ./Frontend/.env <<EOF
DATABASE_URL=mysql://$MYSQL_USER:$MYSQL_PASSWORD@$MYSQL_HOST:$MYSQL_PORT/$MYSQL_DATABASE
EOF

cat > ./Docker/.env <<EOF
DOCKER_PORT=$DOCKER_PORT
EOF

echo " ---------- Building the Docker container ----------"
cd Docker
docker compose up -d --build

echo " ---------- Installation complete ----------"
exit 0