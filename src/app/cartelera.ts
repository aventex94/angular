import { User } from './user';

export interface Cartelera {
    id:String;
    creador:User; //Consultar si tiene que ser el objeto user o el ID;
    nombre:String;
    año:String;
}
