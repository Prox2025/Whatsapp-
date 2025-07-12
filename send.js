import wppconnect from '@wppconnect-team/wppconnect';

const numero = process.env.NUMERO || '2588xxxxxxx'; // Inclua o código do país
const mensagem = process.env.MENSAGEM || 'Olá! Esta é uma mensagem automática.';

wppconnect
  .create({
    session: 'chatgpt-session',
    catchQR: (qrCode, asciiQR, attempt, urlCode) => {
      console.log('[📲 QR Code] Escaneie para conectar:');
      console.log(asciiQR);
    },
    statusFind: (statusSession, session) => {
      console.log('[ℹ️ STATUS]', statusSession);
    },
    headless: true,
    devtools: false,
    useChrome: true,
  })
  .then((client) => start(client));

async function start(client) {
  console.log(`[✅ Enviando para ${numero}]`);
  await client.sendText(numero + '@c.us', mensagem);
  console.log('✅ Mensagem enviada com sucesso!');
}
