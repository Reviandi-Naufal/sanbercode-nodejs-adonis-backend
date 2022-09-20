class Kelas {     
    constructor(NameClass, level, instructor) {
        this._name = NameClass
        this._student = []
        this._level = level
        this._instructor = instructor
    }

    get NameClass(){
        return this._name;
    }

    set NameClass(setName){
        this._name = setName 
    }

    get kelas(){
        return this._class;
    }

    set kelas(setkelas){
        this._class = setkelas 
    }

    get instructor(){
        return this._instructor;
    }

    set instructor(setinstructor){
        this._instructor = setinstructor 
    }

    get student(){
        return this._student;
    }

    addStudent(nameStud){
        this._student.push(nameStud)
    }
}

export default Kelas;