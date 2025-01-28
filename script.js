const cekIpButton = document.getElementById('cek-ip');
const hasilDiv = document.getElementById('hasil');

cekIpButton.addEventListener('click', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            hasilDiv.innerHTML = `
                <p>IP Address: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>Timezone: ${data.timezone}</p>
                <p>Koordinat: ${data.latlong}</p>
                <p>ISP: ${data.isp}</p>
                <p>Kode Pos: ${data.postal}</p>
                <p>Mata Uang: ${data.currency}</p>
                `;
        })
        .catch(error => {
            console.error('Error:', error);
            hasilDiv.textContent = 'Terjadi kesalahan: ' + error;
        });
});
