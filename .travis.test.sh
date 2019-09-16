#!/bin/bash
WORKSPACE=$1

# Retrieve envrironment secrets
echo -e "machine github.com\n  login $GITHUB_TOKEN" > ~/.netrc
git clone https://github.com/kalisio/kaabah-workspaces ../workspaces/master
source ../workspaces/master/env.sh

# Install terraform
curl -fSL "https://releases.hashicorp.com/terraform/0.11.12/terraform_0.11.12_linux_amd64.zip" -o terraform.zip
sudo unzip terraform.zip -d /opt/terraform
sudo ln -s /opt/terraform/terraform /usr/bin/terraform
rm -f terraform.zip

# Initialize Terraform
terraform init -backend-config="backend.config"

# Run terraform over the test workspaces
terraform workspace select $WORKSPACE
terraform apply -auto-approve -var-file="tests/$WORKSPACE.tfvars"
RESULT_CODE=$?

# Destroy the cluster whatever the result
terraform destroy -auto-approve -var-file="tests/$WORKSPACE.tfvars"
terraform workspace select default

# Exit if an error has occured
if [ $RESULT_CODE -ne 0 ]; then
  echo "$WORKSPACE failed [error: $RESULT_CODE]"
	exit 1
fi