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