class Penduduk {
    constructor(penduduk, persentase)
    {
        this.penduduk = penduduk;
        this.persentase = persentase;
        this.hasil = this.penduduk * this.persentase;
    }
    pertambahan()
    {
        return `Pertumbuhan penduduk pertahun ${this.hasil}`;
    }
}

class TargetPenduduk extends Penduduk{
    constructor(penduduk, persentase, pertumbuhan)
    {
        super(penduduk, persentase);
        this.pertumbuhan = pertumbuhan;
    }
    target()
    {
        this.tumbuh = (this.pertumbuhan - this.penduduk) / this.hasil;
        this.hasilakhir = this.tumbuh.toFixed(3);
        return `waktu yang dibutuhkan untuk mencapai ${this.pertumbuhan} penduduk adalah ${this.hasilakhir} tahun`;
    }
    tambahan()
    {
        this.coba = Math.round(this.hasilakhir * this.hasil);
        return `tambahan ${this.coba}`;
    }

}
let targetpenduduk = new TargetPenduduk(30000, 0.03, 100000);
console.log(targetpenduduk.pertambahan());
console.log(targetpenduduk.target());
console.log(targetpenduduk.tambahan());