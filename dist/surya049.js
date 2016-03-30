
// Copyright 2016 by Surya.PW

// Dijalankan jika halaman telah selesai di-load
$(document).ready(function() {
    // Event saat Tombol "Ganti Warna Background" di-click
    $('#btnGanti').click(function() {
        // Mengubah style "background-color" elemen body dengan value selector "warna"
        $('body').css('background-color', $('#warna').val());
    });
});
