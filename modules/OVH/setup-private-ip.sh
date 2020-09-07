#!/bin/bash

# Copy the file
cp /etc/netplan/50-cloud-init.yaml 50-cloud-init.yaml

# Setup the private ip
# Retrieve the unconfigured interface
INTERFACE_DOWN=`ip address list | grep DOWN`
# Retrieve the name of the interface 
INTERFACE_NAME=${INTERFACE_DOWN:3:4}
# Retrieve the unconfigured interface
INTERFACE_INFO=`ip address show label $INTERFACE_NAME | grep ether`
# Retrieve the mac address
INTERFACE_MAC=${INTERFACE_INFO:15:17}
# Configure netplan
echo "network:" > ens4.yml
echo "    ethernets:" >> ens4.yml
echo "        ens4:" >> ens4.yml
echo "            dhcp4: true" >> ens4.yml
echo "            match:" >> ens4.yml
echo "                macaddress: $INTERFACE_MAC" >> ens4.yml
echo "            set-name: ens4" >> ens4.yml
yq m -i 50-cloud-init.yaml ens4.yml
rm ens4.yml

# Copy the updated file
mv 50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml 

# Restart netplan
sudo netplan apply