# Elizabeth DevOps Portfolio

A responsive personal portfolio documenting my DevOps learning journey and projects. It is served by Nginx in a Docker container on an Ubuntu EC2 instance.

**Live site:** http://ec2-13-60-104-0.eu-north-1.compute.amazonaws.com/  
**GitHub repository:** https://github.com/Ogunsusi-Elizabeth/Elizabeth-DevOps-portfolio

## Technologies

- HTML, CSS, and JavaScript
- Docker and Nginx
- Ubuntu on AWS EC2
- GitHub Actions
- AWS Systems Manager (SSM)
- GitHub OIDC for AWS authentication

## Repository structure

- `index.html` — portfolio content
- `styles.css` — layout and responsive styling
- `script.js` — interactive behavior
- `assets/` — images and CV PDF
- `Dockerfile` — builds the Nginx website image
- `.github/workflows/deploy.yml` — validates and deploys changes

## Run the site on EC2

Connect to the EC2 instance, then run:

```bash
cd /home/ubuntu/Elizabeth-DevOps-portfolio
docker build -t elizabeth-portfolio:manual .
docker rm -f elizabeth-portfolio 2>/dev/null || true
docker run -d --name elizabeth-portfolio -p 80:80 --restart unless-stopped elizabeth-portfolio:manual
