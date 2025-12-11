const express = require('express');
const path = require('path');
const app = express();

// 1. Set folder 'public' sebagai tempat file statis (HTML, CSS, Gambar)
app.use(express.static(path.join(__dirname, 'public')));

// 2. FITUR BARU: Health Check Endpoint
// Akses di: namadomain.vercel.app/health
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// 3. Route Utama (Root)
// Saat user buka domain utama, kirim file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uy2.html'));
});
app.get('/nodeMy.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uy2.html'));
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uy2.html'));
});
// 4. Fallback Route (WAJIB DITARUH PALING BAWAH)
// Kalau user asal ketik URL yang tidak ada, balikin lagi ke home
app.get('*', (req, res) => {
    res.redirect('/');
});

// 5. Jalankan Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
