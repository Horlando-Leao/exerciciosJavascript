//modulo do ntp servidor
const ntp = require('ntp-client');

//hora do cliente - objeto cliente 
var data = new Date();
var horaCliente = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}:${data.getMilliseconds()}`;

//função do modulo ntp - objeto NTP
(function call(){
    ntp.getNetworkTime("pool.ntp.org", 123, function (err, date) {
        if (err) {
            console.error(err);
            return;
        }

        //hora cliente
        console.log(`HORA CLIENTE: ${horaCliente}`);

        //hora servidor
        var horaServidor = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
        console.log(`HORA SERVIDOR: ${horaServidor}`); // segunda Jullho 08 2020 21:31:31 GMT+0300 (pernambuco, brasil)
        
        var horas_cliente_servidor = [horaCliente, horaServidor ];
        
        function diferencia_horas(horaAntiga, horaRecente){
            
            var horaAntigaReplace = horaAntiga.replace(/:/g,"")
            var horaRecenteReplace = horaRecente.replace(/:/g,"")
            
            var diferencaTempo = (horaRecenteReplace - horaAntigaReplace);
            console.log(`a diferença em milisegundos entre CLIENTE E SERVIDOR É DE: ${diferencaTempo}`);
        }

        (diferencia_horas(horas_cliente_servidor[0], horas_cliente_servidor[1]));
    });
})();

