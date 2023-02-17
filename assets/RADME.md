# Instruction about the assets in this directory

## MySQL/MariaDB

In the directory [`./sql/`](assets/sql/) are available three manual like SQL files. We can suppress the comments and use them as SQL scrips to create or remove the `db_name` and `db_admin` MySQL database and user used in this tutorial.

* Create:

  ```bash
  sed -r \
  -e '/^(-- |$)/d' \
  -e 's/db_name/mlt_home_db/g' \
  -e 's/db_admin/mlt_home_admin/g' \
  -e 's/strong-password/vip123Fr!@3$5/g' \
  sql/mariadb_db_create.sql | sudo mysql # assets/sql/mysql_db_create.sql | sudo mysql
  ```

* Check:

  ```bash
  sudo mysql <<< "SHOW DATABASES;"
  sudo mysql <<< "SELECT User, Host, plugin FROM mysql.user;"
  ```

* Remove:

  ```bash
  sed -r \
  -e '/^(-- |$)/d' \
  -e 's/db_name/db_name/g' \
  -e 's/db_admin/db_admin/g' \
  sql/db_remove.sql | sudo mysql
  ```
