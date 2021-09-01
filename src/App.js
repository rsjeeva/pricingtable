import './App.css';
import Card from './Components/Card';
import './Components/FontAwesome/fontawesome';
function App() {

  let obj1 = {
    type:'FREE', price:'$0/month',
    access_lists:['single User','5GB Storage','Unlimited Public Projects','Community Access'],
    nonaccess_lists:['Unlimited Private Projects','Dedicated Phone Support', 'Free Subdomain','Monthly Status Reports']
  }

  let obj2 ={
    type:'PLUS', price:'$9/month', 
    access_lists:['5 User','50GB Storage','Unlimited Public Projects','Community Access','Unlimited Private Projects','Dedicated Phone Support', 'Free Subdomain'],
    nonaccess_lists:['Monthly Status Reports']
  }

  let obj3 ={
    type:'PRO', price:'$49/month',
    access_lists:['Unlimited Users','150GB Storage','Unlimited Public Projects','Community Access','Unlimited Private Projects','Dedicated Phone Support', 'Unlimited Free Subdomains','Monthly Status Reports'],
    nonaccess_lists:[]
  }

 return <div className='app_header'>
   <Card objs={obj1}></Card>
   <Card objs={obj2}></Card>
   <Card objs={obj3}></Card>
 </div>
}

export default App;
