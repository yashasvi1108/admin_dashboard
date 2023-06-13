import {useEffect,useState} from 'react';
import PieChart from './PieChart';



const Dashboard = () => {
  
   const[record,setRecord] = useState([])

   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }

   useEffect(() => {
      getData();
   },)
   

    return (
    <div class="col main pt-5 mt-3">
        
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Details</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Add Employee Details and Records</p>

        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">User Profiles</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                        <i class="fas fa-handshake  fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Interviews</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                        <i class="fas fa-check-circle fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Apply</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fas fa-comment fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Message</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        
      
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
              More Employee Records
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                 <div className="mb-5" style={{height:"300px",width:"400px"}}><PieChart/> </div></div>
        </div>
      
        <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Recommended Profiles</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </p>
                          
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
       
       
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </p>
                          
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>


        <h2 class="sub-header mt-5">Featured Companies</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </p>
                          
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>


        
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </p>
                          
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-danger text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>



     

        <a id="layouts"></a>
        <hr/>
        <h2 class="sub-header mt-5">Highlights of Interviewee skills & CV</h2>
        <div class="row mb-3">
            <div class="col-lg-6">

                <div class="card mb-3">
                  
                    <div class="card-body">
                        
                        <p class="card-text">Check the skills of the interviewee & select the one most appropriate for the job role</p>
                        <button type="button" class="btn btn-secondary btn-lg">Get CV Details </button>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
              
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                    </li>
                </ul>

            
                <div class="tab-content">
                    <br/>
                    <div role="tabpanel" class="tab-pane active" id="home1">
                        <h4>Home</h4>
                       
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile1">
                        <h4>Profile Details</h4>
                       
                    </div>
                    <div role="tabpanel" class="tab-pane" id="messages1">
                        <h4>Messages</h4>
                        
                    </div>
                    <div role="tabpanel" class="tab-pane" id="settings1">
                        <h4>Settings</h4>
                       
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-6">
                <div class="card card-default card-body">
                    <ul id="tabsJustified" class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                        </li>
                    </ul>
                 
                    <br/>
                    <div id="tabsJustifiedContent" class="tab-content">
                        <div class="tab-pane" id="tab1">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-success">51</span> Home Link</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">8</span> Link 2</a>
                                <a href="" class="list-group-item"><span class="float-right label label-success">23</span> Link 3</a>
                                <a href="" class="list-group-item text-muted">Link n..</a>
                            </div>
                        </div>
                        <div class="tab-pane active" id="tab2">
                            <div class="row">
                                <div class="col-sm-7">
                                    <h4>Profile Section</h4>
                                    <p>Employee Details</p>
                                </div>
                                <div class="col-sm-5"><img src="//placehold.it/170" class="float-right img-responsive img-rounded"/></div>
                            </div>
                            <hr/>
                            <a href="javascript:;" class="btn btn-info btn-block">Read More Profiles</a>
                            <div class="spacer5"></div>
                        </div>
                        <div class="tab-pane" id="tab3">
                            <div class="list-group">
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">44</span> Message1</a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">8</span>Message2</a>
                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">23</span> Message3</a>
                                <a href="" class="list-group-item text-muted">Message n..</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div class="col-lg-6">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne"  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I schedule an interview with a candidate?
                    </div>
                    <div id="collapseOne" class="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                         <p>Create a new user account by navigating to the user management section.</p>
                    </div>
                    <div class="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I access the candidate's profile or resume?
                    </div>
                    <div id="collapseTwo" class="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                         <p>
Access the candidate's profile or resume by clicking on their name or profile icon within the dashboard</p>
                    </div>
                    <div class="card-header" role="tab" id="headingThree"  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What is the average duration of the interview process for all candidates in the past month?
                    </div>
                    <div id="collapseThree" class="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                         <p>Check the Analytics section provided on the dashboard.</p>
                    </div>
                  </div>
                </div>
               
            </div>
        </div>

    </div>
    )
}


export default Dashboard

