# Kubernetes Services Deployment

This project demonstrates the development and deployment of a database and an API service in a Kubernetes (k8s) cluster, adhering to best practices for scalability, reliability, and security.

# Link for code repo
https://github.com/ShagunVerma2101/shagun_3166551_kubernetes.git

# Docker Hub URL
https://hub.docker.com/repository/docker/vermashagun2101/nagp-api/tags
Image tag used in Demo : vermashagun2101/nagp-api:tag5

# URL for Service API tier to view the records from backend tier.
http://a33e1caf2d03543e48e519f4f95fb2b0-1249148858.us-east-1.elb.amazonaws.com:3000/tasks

# URL Link for screen recording video showing everything mentioned above
https://nagarro-my.sharepoint.com/:v:/p/shagun_verma/EZF6oa0kNMlNtSCQ8fdpFccBKZbweJNeCrjA6keVugpR2g
0:00 - 12:00 Section 1 for DB deployment ad overall structure
12:00 - 17:00 Section 2 for API usage and deployment
17:00 - 29:00 Section 3 for Autoscalar Demo

# Some commands used 
kubectl apply -f
kubectl delete -f
kubectl exec -it <pod-name> /bin/sh
mysql -u <username> -p
kubectl top <resource-name>
kubectl get <resource-name> --watch
kubectl describe <resource-name>
docker build -t
docker push

# Some screenshots for quick reference
<img width="774" alt="Screenshot 2024-06-02 at 5 42 42 PM" src="https://github.com/ShagunVerma2101/shagun_3166551_kubernetes/assets/32119815/8a9a19f9-bfab-4ffb-a2bd-3b6effce03cc">
<img width="735" alt="Screenshot 2024-06-02 at 5 42 34 PM" src="https://github.com/ShagunVerma2101/shagun_3166551_kubernetes/assets/32119815/d9bc8c11-4c99-476e-b064-7fba0c8e7a2c">
<img width="599" alt="Screenshot 2024-06-02 at 5 42 20 PM" src="https://github.com/ShagunVerma2101/shagun_3166551_kubernetes/assets/32119815/3d0f0fce-13b0-4527-aad6-c7a5d44f6e9d">
<img width="643" alt="Screenshot 2024-06-02 at 5 42 09 PM" src="https://github.com/ShagunVerma2101/shagun_3166551_kubernetes/assets/32119815/2e92d865-7977-4684-b1e1-37a5e9f1c03f">
<img width="975" alt="Screenshot 2024-06-02 at 6 00 58 PM" src="https://github.com/ShagunVerma2101/shagun_3166551_kubernetes/assets/32119815/56596b18-43d1-4919-a4ad-1e07d6bd45ea">
