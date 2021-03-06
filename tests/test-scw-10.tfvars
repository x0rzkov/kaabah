cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

ssh_user = "kalisio"

manager_instance_type = "DEV1-S"

manager_additional_volume_size = 100

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "41e8eb86-faf9-4c01-8ef9-cf4da9ea1530"
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

