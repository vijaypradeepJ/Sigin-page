export const login = (email, password) => {
    return new Promise((resolve, reject) => {
      let endpoint = `http://api.your-domain-here.ngrok.io/api/core/v1/sessions`;
      fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email, 
          password: password, 
        }) 
      })
        .then(e => {
          if (e.ok) {
            resolve(e);
          } else {
            reject(e);
          }
        })
        .catch(e => console.log("error::", e));
    });
  };
  
  export const logOut = (userId) => {
    return new Promise((resolve, reject) => {
      let endpoint = `http://api.your-domain-here.ngrok.io/api/core/v1/sessions/${userId}`;
      fetch(endpoint, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
        .then(e => {
          if (e.ok) {
            resolve(e);
          } else {
            reject(e);
          }
        })
        .catch(e => console.log("error::", e));
    });
};