const logout = async () => {
  const response = await fetch('/api/v1/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

// logout.js:14 Uncaught TypeError: Cannot read property 'addEventListener' of null
// at logout.js:14