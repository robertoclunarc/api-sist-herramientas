import mysql from 'mysql2/promise';

class database {

  conn: any;

  async conectarBd() {
     
    this.conn = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sistherramientas',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

      try {            
          let testconection = await this.conn.query (`use sistherramientas`);
          console.log(`Database sistherramientas!` );
      } catch (error) {
          console.log(`ERROR database conection!: ${error} `);
      }
  }

  getC() {
      return this.conn;
  }

  private desconectarDB() {
     
      this.conn.end(() => { });
  }

  async querySelect(sql: string, data?: any) {

      let result: any = null;
      if (!data) {
          result = await this.conn.query(sql);
      } else {
          result = await this.conn.query(sql, data);
      }
     
      return result[0];
  }
}

const db = new database();
export default db;