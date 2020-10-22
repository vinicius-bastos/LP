

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class Conexao {

    public static void main(String[] args) {
                // Configurando e estabelecendo a Conexão com o banco de dados
        BasicDataSource dataSource = new BasicDataSource();
        // Indicando a classe do Driver de banco
        dataSource.setDriverClassName("org.h2.Driver");
        // Indicando a URL do banco
        dataSource.setUrl("jdbc:h2:file:./bancoControlDamp");
        // Indicando o usuário e senha de acesso
        dataSource.setUsername("sa");
        dataSource.setPassword(""); 
        
        
        // Um JDBCTemplate permite enviar instruções SQL ao banco
        // bem como trata e converte as respostas
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        
        System.out.println(jdbcTemplate.queryForList("select * from usuario"));

    }
    
}
