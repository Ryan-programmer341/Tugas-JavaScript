 let nama = "", sekolah = "";

    function isiNama() {
      nama = document.getElementById("inputNama").value;
    }

    function isiSekolah() {
      sekolah = document.getElementById("inputSekolah").value;
    }

    function gantiWarna() {
      const warna = document.getElementById("warna").value;
      document.getElementById("hasil").style.color = warna;
    }

    function tampilkan() {
      isiNama();
      isiSekolah();

      if (nama === "" || sekolah === "") {
        alert("Nama dan Sekolah harus diisi!");
        return;
      }

      document.getElementById("nama").innerText = nama;
      document.getElementById("sekolah").innerText = sekolah;
    }
    
      document.getElementById("hasil").addEventListener("mouseover", function() {
      this.style.fontSize = "2em";
    });
    document.getElementById("hasil").addEventListener("mouseout", function() {
      this.style.fontSize = "1em";
    });