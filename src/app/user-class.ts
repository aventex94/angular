import { User } from './user';

export class UserClass implements User{
    public id: String;
    public apellido: String;
    public email: String;
    public nombre: String;
    public password: String;
    public username: String;
    public perfil: String;
    public dni: String;

    public setId(id:String){
        this.id=id;
    }
    public getId(){
        return this.id;
    }
    public setApellido(apellido:String){
        this.apellido=apellido;
    }
    public getApellido(){
        return this.apellido;
    }
    public setEmail(email:String){
        this.email=email;
    }
    public getEmail(){
        return this.email;
    }
    public setNombre(nombre: String){
        this.nombre=nombre;
    }
    public getNombre(){
        return this.nombre;
    }
    public setPassword(password:String){
        this.password=password;
    }
    public getPassword(){
        return this.password;
    }
    constructor(idParam:String){
        this.setId(idParam);
    }
}