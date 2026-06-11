import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("orderDibuat", (name)=>{
    console.log(`Kirim Invoice ${name}`);
})

emitter.on("orderDibuat", (name)=>{
    console.log(`Kurangi Stok ${name}`);
})

emitter.on("orderDibuat", (name)=> {
    console.log(`Simpan log ${name}`);
    
})

emitter.emit("orderDibuat", "ORDER001")