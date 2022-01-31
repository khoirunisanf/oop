class Person{
    constructor(nama, umur, sekolah){
    this.nama = nama;
    this.umur = umur;
    this.sekolah = sekolah;
    }

    run() {
    return " Nama saya " + this.nama + " umur saya " + this.umur + " sekolah di " + this.sekolah;
    }
    
    run2() {
        return this;
    }
}
class custumer extends Person {
    constructor(nama, umur, sekolah, hobi) {
        super(nama, umur, sekolah);

        this.hobi = hobi;
    }

    job() {
        return "dan hobi saya adalah" + this.hobi;
    }

}

const Khoirunisa = new Person(" khoirunisa ", " 16 tahun ", " SMK Yadika Soreang ");
const run=new custumer(" khoirunisa ", " 16 tahun ", " SMK Yadika Soreang ", " masak ")
console.log(Khoirunisa.run());
console.log(run.job());