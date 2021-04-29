const register = (email, name, password) =>
  fetch('http://192.168.1.101/app/register.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, name, password}),
  }).then((response) => response.text());

export {register};
