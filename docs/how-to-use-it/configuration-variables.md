| Variables | Description |
|--- | --- |
| `SCALEWAY_ACCESS_KEY` | Your Scaleway access key |
| `SCALEWAY_TOKEN` | Your Scaleway token |
| `AWS_ACCESS_KEY` | Your AWS access key. This is important to note that your credential must allows access to AWS EC2 and S3 services |
| `AWS_SECRET_KEY` | Your AWS secret key |
| `auth_user` | Your authentication identity to access the services. If not defined in the file, **Kaabah** will try to define it from the environment variable `TF_AUTH_USER` |
| `auth_password` | Your authentication password to access the services. It can be encoded in **MD5**, **SHA1** and **BCrypt**: you can use [htpasswd](http://www.htaccesstools.com/htpasswd-generator/) to generate it. If not defined in the file, **Kaabah** will try to define it from the environment variable `TF_AUTH_PASSWORD` |
| `provider` | The provider to host the infrastructure. It must be `AWS` or `Scaleway`. There is no default value |
| `domain` | The domain to be added to the traefik rules. The default value is `kalisio.xyz` |
| `subdomain` | The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each `-` by `.`. For instance, the subdomain for the workspace `app-dev` will be `app.dev` |
| `ca_server` | The Let's Encrypt server to generate certificates. The default value is empty to let traefik manage for you. However and because Let's Encrypt provides [rate limits](https://letsencrypt.org/docs/rate-limits/) it is recommended to set this value to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure. |
| `contact`| The email contact provided to Let's Encrypt when generating certificates. The default value is `contact@kalisio.com` |
| `docker_version` | The version of the Docker engine to be installed. The default value is `18.03.1~ce-0~ubuntu` |
| `docker_network` | The name of the Docker network to be created. The default value is the name of the Terraform workspace without the environment part. For instance, the Docker network for the workspace `app-dev` will be `app` |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `manager_labels` | The labels to add to the manager node. Labels are defined using a set of *key=value* pairs separated with spaces. The default value is `""` |
| `manager_user_script` | The user script to be executed when when the manager is ready. It must be the file path to the script. The default value is `""` |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `worker_instance_count` | The number of worker instances. The default value is `1` |
| `worker_additional_volume_count` | The number of volumes attached to each worker. The default value is `0` |
| `worker_additional_volume_size` | The size in giga bytes of the additional volumes. Note that on Scaleway you are limited to 150GB and the minimum size is 50GB. Moreover, you can add volumes to bare-metal instances only. The default value is `150` |
| `worker_additional_volume_type` | The type of additional volumes to add. This option only works on AWS. The different [types](https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) are `gp2`, `io1`, `st1` and `sc1`. The default value is `sc1` |
| `worker_additional_volume_mount_point` | The mount point used to mount the devices. The prefix `/dev/` is automatically added and the default value is `data` |
| `worker_labels` | The labels to add to the different worker nodes. Labels are defined using a set of *key=value* pairs separated with spaces. Labels for each workers are declared using a list, e.g. `["worker0:true", "worker1:true", ...]`. The default value is `[]` |
| `worker_user_scripts` | The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is `[]` |
| `extensions_dir` | The directory to provision to extend the services. The default value is `""` |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. The default value is `ssh.pem` |
| `key_name` | The AWS name of the ssh key to be used when creating the instance. The default value is `kalisio` |