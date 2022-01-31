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

const Khoirunisa = new Person("khoirunisa", "16 tahun", "SMK Yadika Soreang")
console.log(Khoirunisa.run());
console.log(Khoirunisa.run2());