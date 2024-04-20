Deployment: https://rate-a-hero.onrender.com/

msp2 Rate-A-Hero Rate-A-Hero is an API used to find Marvel characters information and series they may be in.

Tech Usage CSS Framework: Bootshrap Stack: MongoDB, Express, NodeJS Server-Side Rendering: JSX Node Modules: Method-override, dotenv, express-react-views, react-bootstrap

Routes Method Path Purpose GET / Home Page GET /hero/:id Details about a particular hero POST /hero/:id/rant Create a rant (comment) about a particular hero DELETE /hero/:id/rant/:rantId Delete a rant (comment) about a particular hero GET * 404 page (matches any route not defined above) Database Rants

Field Type Character Object ID info_id ref(information) Object_Id rant Boolean rating Number comment String reviewer String Planning User Stories Wireframes Notes API has 3000 calls/day

Sources/Links https://developer.marvel.com/docs

All copyrights go to Marvel Comics

FUTURE PLANS!!!!
- add a comment section and rating for each individual Marvel character. 
- Links to the most popular Comics for that character. 
- Possibly add the ability to log in. 

ROAD BLOCKS!!!
- Planning and connecting the comments to the show pages.
- We had some roadblocks when it came to getting the Marvel API to work. 