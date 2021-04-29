const payment = (token, arrayDetail) =>
  fetch('http://192.168.1.101/app/payment.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({token, arrayDetail}),
  }).then((response) => response.text());

export {payment};
