// import React, { useState } from 'react';
// import liff from '@line/liff';
// const LoginLine = () => {


  // const [name, setName] = useState('');
  // const [picture, setPicture] = useState('');
  // const [userId, setUserId] = useState('');

//   liff.init({ liffId: '1656181485-PYVwNQ6K' });
//   console.log(liff);

//   const handleLogin = () => {
//     liff.init({ liffId: '1656181485-PYVwNQ6K' });
//     console.log('Button Done');
//     // alert('Line Button Work');

//     if (!liff.isLoggedIn() && !liff.isInClient()) {
//       liff.login()
//   } else {
    
      // liff.getProfile()
      // .then(profile => {
      //   const name = profile?.displayName;
      //   const userId = profile?.userId;
      //   const image = profile?.pictureUrl;
      //   // const statusMessage = profile?.statusMessage;
      //   console.log('name :',name);
      //   console.log('picture :',image);
      //   console.log('userId :',userId);
      //   // console.log('statusMessage :',statusMessage);

      //   setName(name);
      //   setPicture(image);
      //   setUserId(userId);
      // })
      // .catch((err) => {
      //   console.log('error', err);
      // });
//   }
//       const accessToken = liff.getAccessToken();
//       console.log(accessToken);
// }

//   return (
//     <div>
//       <h1>Login With Line</h1>       
//       <h1>Line Name {name}</h1>
//       <p>Access token : {liff.getAccessToken()}</p>   
//       <p>UserID : {userId}</p>;
//       <p>Picture</p>
//       <img src={picture} alt="" />
      
//       <button onClick={handleLogin}>Line</button>
//     </div>
//   );
// };

// export default LoginLine;