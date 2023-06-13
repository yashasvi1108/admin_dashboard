import React from 'react'

export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                  
                    <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template"> Admin
                     </a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> Job Listings<span class="sr-only">Job Listings</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Candidates <span class="sr-only">Candidates</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> Applications<span class="sr-only">Applications</span></a>
                        </li>
                        
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        
                       
                        <li class="nav-item">
                 
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-bell"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-cog"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>

              <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-sign-out-alt"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}

export default Navbar