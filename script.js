const cekIpButton = document.getElementById('cek-ip');
const hasilDiv = document.getElementById('hasil');

cekIpButton.addEventListener('click', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            // Menggunakan WorldTimeAPI untuk mendapatkan waktu
            fetch(`https://worldtimeapi.org/api/timezone/${data.timezone}`)
                .then(response => response.json())
                .then(waktuData => {
                    const waktuLokal = waktuData.datetime;
                    hasilDiv.innerHTML = `
                        <p>IP Address: ${data.ip}</p>
                        <p>City: ${data.city}</p>
                        <p>Region: ${data.region}</p>
                        <p>Country: ${data.country}</p>
                        <p>Timezone: ${data.timezone}</p>
                        <p>Koordinat: ${data.latitude}, ${data.longtitude}</p>
                        <p>Waktu Lokal: ${waktuLokal}</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching time:', error);
                    hasilDiv.textContent += '<p>Gagal mengambil waktu.</p>';
                });
        })
        .catch(error => {
            console.error('Error fetching IP data:', error);
            hasilDiv.textContent = 'Terjadi kesalahan: ' + error;
        });
});
