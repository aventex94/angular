import { Cartelera } from './cartelera';

import { User } from './user';

export class CarteleraClass implements Cartelera {
    id:String;
    creador:User;
    nombre:String;

    public setId(id:String){
        this.id=id;
    }
    public getId(){
        return this.id;
    }
    public setCreador(creador:User){
        this.creador=creador;
    }
    public getCreador(){
        return this.creador;
    }
    public setNombre(nombre:String){
        this.nombre=nombre;
    }
    constructor(){
        
    }

}
