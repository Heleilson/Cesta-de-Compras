
var db = openDatabase('bancodados', '1.0', 'Teste DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LISTA (id INTEGER PRIMARY KEY, produto, quantidade, preco)');
    msg = '<p>Mensagem</p>';
    document.querySelector('#s_listas').innerHTML =  msg;
});
function adicionar() {
    console.log('rodando')
    var v_preco = document.querySelector('#p_produto').value;
    var v_produto = document.querySelector('#n_produto').value;
    var v_quantidade = document.querySelector('#q_produto').value;
    console.log(v_preco + ' ' + v_produto + ' ' + v_quantidade)
    db.transaction(function (tx) {            
        tx.executeSql(`INSERT INTO LISTA (produto, quantidade, preco) VALUES ('${v_produto}', '${v_quantidade}', '${v_preco}')`, [], console.log, console.error    );            
        //msg = '<p>Mensagem</p>';
        document.querySelector('#s_listas').innerHTML =  msg;
    });
}
