class VigenereCipheringMachine {
    encrypt(message, key ) {
        if (message == undefined || key == undefined){
            throw new Error();
        }
        //throw 'Not implemented';
        // remove line with error and write your code here
        //{\displaystyle c_{j}=(m_{j}+k_{j})\mod {n}}
    let Message = message.toUpperCase().split('');
    let Key = key.toUpperCase().split("");

       let Number = Message.map(elem => {elem.charCode() });
        
    }

    decrypt(message, key ) {
        if (message == undefined || key == undefined){
            throw new Error();
        }
       // throw 'Not implemented';
        // remove line with error and write your code here
    }
}

module.exports = VigenereCipheringMachine;
