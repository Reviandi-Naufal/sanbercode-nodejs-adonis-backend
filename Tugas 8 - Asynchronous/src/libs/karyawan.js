class Karyawan{
    constructor(name, password, role){
        this._name = name;
        this._password = password;
        this._role = role;
        this._isLogin = false;
        if(this._role == 'trainer'){
            this._students = []
        }
    }

    get Name(){
        return this._name;
    }

    set Name(inputName){
        this._name = inputName;
    }

    get Password(){
        return this._password;
    }

    set Password(inputPass){
        this._password = inputPass;
    }

    get Role(){
        return this._role;
    } 

    set Role(inputRole){
        this._role = inputRole;
    }

    get isLogin(){
        return this._isLogin;
    }

    set isLogin(inputLogin){
        this._isLogin = inputLogin;
    }
}

export default Karyawan