const cekIpButton = document.getElementById('cek-ip');
const hasilDiv = document.getElementById('hasil');

cekIpButton.addEventListener('click', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            // Menampilkan informasi dasar
            hasilDiv.innerHTML = `
                <p>IP Address: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>Timezone: ${data.timezone}</p>
                <p>Koordinat: ${data.latitude}, ${data.longtitude}</p>
            `;

            // Menampilkan waktu real-time berdasarkan zona waktu
            const waktuSekarang = dayjs().tz(data.timezone);
            hasilDiv.innerHTML += `<p>Waktu Lokal: ${waktuSekarang.format('HH:mm:ss DD MMMM YYYY')}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            hasilDiv.textContent = 'Terjadi kesalahan: ' + error;
        });
});
