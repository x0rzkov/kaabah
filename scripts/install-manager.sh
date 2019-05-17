#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2
FAIL2BAN_IGNORE_IP=$3

# Generate TLS certificates
bash $HOME/.kaabah/create-server-certificates.sh $MANAGER_PRIVATE_IP
bash $HOME/.kaabah/create-client-certificates.sh
rm ~/.kaabah/ca.*

# Secure ssh key permissions
chmod 600 $HOME/.ssh/ssh.pem

# Setup Docker configuration to enable TLS protection
mkdir -p /etc/systemd/system/docker.service.d
cp $HOME/.kaabah/docker-configs/override.conf /etc/systemd/system/docker.service.d/.

mkdir -p /etc/docker
export MANAGER_PRIVATE_IP
envsubst < $HOME/.kaabah/docker-configs/manager.json.tpl > /etc/docker/daemon.json

export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=$HOME/.docker
export DOCKER_HOST=tcp://$MANAGER_PRIVATE_IP:2376

echo "export DOCKER_TLS_VERIFY=$DOCKER_TLS_VERIFY" >> $HOME/.bash_profile
echo "export DOCKER_CERT_PATH=$DOCKER_CERT_PATH" >> $HOME/.bash_profile
echo "export DOCKER_HOST=$DOCKER_HOST" >> $HOME/.bash_profile

# Install docker
bash $HOME/.kaabah/install-docker.sh $DOCKER_VERSION

# Initialise swarm
docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377

# Configure SSHD
bash $HOME/.kaabah/setup-sshd.sh $FAIL2BAN_IGNORE_IP

# Install sshfs
bash $HOME/.kaabah/install-sshfs.sh

# Install helper commands
cp $HOME/.kaabah/helper-commands/* /usr/local/sbin/.
for UTILITY in /usr/local/sbin//k-*; do
  chmod +x $UTILITY
done
