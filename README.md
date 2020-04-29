# image-filter
udacity assignment for module 2

###### github for the project image-filter: https://github.com/chrillen/image-filter

###### url: http://imagefilter-chrille-dev.us-east-1.elasticbeanstalk.com/

###### token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlsbGVuQGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4OTEzOCwiZXhwIjoxNjE5NjI1MTM4fQ.pZAML8M_eKn8nMxkHB0flcV3d8Vtz2uO52idpnza8oY

###### Image of deployment in AWS:
![image of deployment](https://github.com/chrillen/image-filter/blob/master/deployment_screenshots/imagefilter-deployed-elastic-beanstalk.png)

test url: http://imagefilter-chrille-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KITTEN_on_BAMBOO_top_C_11JUN94.jpg/722px-KITTEN_on_BAMBOO_top_C_11JUN94.jpg

###### Authentication:
Now i just duplicated requireAuth for calculating that the jwt is valid but normally in my opinion it should be maybe a indipendant NPM package that all projects import then can reuse same validation code instead.

My intial thought was to call udagrams api verification call but it feels like overcomplicating things so my solution above with packages seems best.

###### image service during upload:
I added another column to the feedItem table for storing the filtered-image name.
Added http call that stream directly to s3 using aws-sdk upload manager to see more details checkout my forked repo.

###### here you can see the changes:
https://github.com/chrillen/cloud-developer/commit/39778c7ee3d9a5a9b7cd882e0c5a449e7b96c171

###### Here is my repo:
https://github.com/chrillen/cloud-developer/


To test the frontend application the frontend using ionic serve from your shell.
i have added a image of my updated frontend added just so filtered image is below original to see the backend is processing both.

###### Image of the new frontend updates i did:
![image of new frontend](https://github.com/chrillen/image-filter/blob/master/deployment_screenshots/image-of-updated-frontend.PNG)

