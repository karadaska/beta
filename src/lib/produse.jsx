export async function getMeniu(setMeniu, accessToken, navigate) {
    const response = await fetch("http://localhost:3000/meniu", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const meniuFromServer = await response.json();
  
    console.log(meniuFromServer);

    if (response.ok) {
        setMeniu(meniuFromServer);
    }
  
    if (response.status === 401) {
      navigate('/login')
    }
  }
  