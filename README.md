# image-filter
udacity assignment for module 2

url: http://imagefilter-chrille-dev.us-east-1.elasticbeanstalk.com/

token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlsbGVuQGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4OTEzOCwiZXhwIjoxNjE5NjI1MTM4fQ.pZAML8M_eKn8nMxkHB0flcV3d8Vtz2uO52idpnza8oY

image of deploymnt: /deployment_screenshoot/imagefilter-deployed-elastic-beanstalk.png

test url: http://imagefilter-chrille-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KITTEN_on_BAMBOO_top_C_11JUN94.jpg/722px-KITTEN_on_BAMBOO_top_C_11JUN94.jpg

Authentication:
Now i just duplicated requireAuth for calculating that the jwt is valid but normally in my opinion it should be maybe a indipendant NPM package that all projects import then can reuse same validation code instead.

My intial thought was to call udagrams api verification call but it feels like overcomplicating things so my solution above with packages seems best.

image service during upload:
I am during 
