module.exports = {
    /**
     * mongo配置
     * DBHOST:数据库连接地址
     * DBPORT:数据库端口
     * DBNAME:数据库名字
     */
    dbConfig: {
        DBHOST: '10.168.1.100',
        DBPORT: 27017,
        DBNAME: 'dev',
    },
    /**
     * jwt配置
     */
    jwtConfig: {
        jwtSecretKey: 'zxp_todolist',
        jwtExpiresIn: '10h',
        jwtAlgorithm: 'HS256'
    }
}


