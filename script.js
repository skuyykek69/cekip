import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const cekIpButton = document.getElementById('cek-ip');
const hasilDiv = document.getElementById('hasil');

cekIpButton.addEventListener('click', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const waktuSekarang = dayjs().tz(data.timezone);
            hasilDiv.innerHTML = `
                <p>IP Address: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>Timezone: ${data.timezone}</p>
                <p>Koodinat: ${data.latitude}, ${data.longtitude}</p>
                <p>Waktu Lokal: ${waktuSekarang.format('HH:mm:ss DD MMMM YYYY')}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            hasilDiv.textContent = 'Terjadi kesalahan: ' + error;
        });
});
