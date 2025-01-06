### Import statement not working in global styles
````
/* Not working: Next.js error does not handle @import well in production */

@import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap');
````

### Responsive hero section
 ````
    height: 60vh;
    margin: auto;
    display: flex;
    align-items: center;
 ````


### Neon glowing animation for image/container
````
box-shadow: 
    0 0 10px rgb(250, 139, 120), 
    0 0 20px rgb(250, 139, 120), 
    0 0 40px rgb(250, 139, 120), 
    0 0 80px rgb(250, 139, 120);
animation: neon-glow 1.5s infinite alternate;

@keyframes neon-glow {
        0% {
            text-shadow: 
            0 0 5px rgb(250, 139, 120),
            0 0 10px rgb(250, 139, 120),
            0 0 20px rgb(250, 139, 120),
            0 0 40px rgb(250, 139, 120),
            0 0 80px rgb(250, 139, 120);
        }
        100% {
            text-shadow: 
            0 0 5px rgb(255, 160, 149),
            0 0 10px rgb(255, 160, 149),
            0 0 30px rgb(255, 160, 149),
            0 0 50px rgb(255, 160, 149),
            0 0 80px rgb(255, 160, 149);
        }
    }
````

### For Admin dashboard: To send the data to front end in ANOTHER PROJECT 
````
INSIDE api/products/route.js

// import Cors from 'cors';

// const cors = Cors({
//     origin: 'http://localhost:3001',
//     methods: ['GET', 'POST', 'OPTIONS'],
// });

// function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result);
//             }
//             return resolve(result);
//         });
//     });
// }

inside GET method
// await runMiddleware(req, res, cors);

````


### CartContext (commented code: NO NEED)

````
  useEffect(() => {
        if (cartProducts?.length > 0) {
            LS.setItem('cart', JSON.stringify(cartProducts)); // save to local storage
            // set
        }
    }, [cartProducts])
````


### Stripe webhook

In order for the Stripe webhook to work, (to set the isPaid status 'true'). 
I need to run the following commands in a separate terminal

````
stripe login

stripe listen --forward-to localhost:3000/api/webhook

````
copy the webhook secret and paste in .env file