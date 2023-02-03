(function(root, factory){
    
    if(typeof defin === 'function' && define.amd){
        define([],factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        
        root[name] = factory()[name];
    }
} (globalThis, function(){
    function consoleLog(){
        console.log('Kalariya Jigar')
    }
    return{
        consoleLog: consoleLog,
    }
},'consoleLog'));
