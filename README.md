# Fantasy Football Statistics Website

Click [here](https://tbaratta.github.io/Fantasy_Football_Web/) to view the project website.

## 🤖 Introduction <a name="introduction"></a>

This website was created to display in-depth football statistics from an array of popular NFL athletes to help fantasy football managers evaluate players.

## ⚙️ Tech Stack <a name="tech-stack"></a>

- C (Prototype)
- HTML
- CSS
- JavaScript



flowchart TD

    A[User<br>Browser / Mobile App] --> B[Route53 DNS]

    B --> C[AWS Application Load Balancer<br>HTTPS 443<br>SSL Termination (ACM)]

    C --> D[EC2 Instance<br>Ubuntu]

    D --> E[Nginx Reverse Proxy<br>Listens 443]

    E --> F[Node.js App<br>127.0.0.1:4000<br>Managed by PM2]

    E --> G[Webhook Service<br>127.0.0.1:3000]

    F --> H[(Database)]
    F --> I[Apple Music API]

