const checkLogin = (token) =>
  fetch('http://192.168.1.101/app/check_login.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({token}),
  }).then((response) => response.json());

export {checkLogin};
