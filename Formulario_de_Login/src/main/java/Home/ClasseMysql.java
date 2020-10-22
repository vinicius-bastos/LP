/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Home;
import java.sql.*;
/**
 *
 * @author Admin
 */
public class ClasseMysql {
    static final String linkConexao = "jdbc:mysql://localhost/projetoCaptura?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
    
    
    static final String USER = "TesteAPI";
    static final String PASS = "bandtec";
    
    Connection conn = null;
    Statement stmt = null;
        
    
    public void conectarBD() {
        
        try {
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(linkConexao,USER,PASS);
            System.out.println("Successfully connected!");

        } catch (SQLException se) {
            System.out.println("Error!");
            System.out.println(se);
            
        }
    }
    
    
    public ResultSet consultarBD() throws SQLException{
       System.out.println("Creating statement...");
      stmt = conn.createStatement();
      
      String sql;
      sql = "SELECT * FROM dados";
      
      ResultSet rs = stmt.executeQuery(sql);
      
        System.out.println("Command sucessfully executed!");
        System.out.println(rs);
        
        return rs;
    }
}
