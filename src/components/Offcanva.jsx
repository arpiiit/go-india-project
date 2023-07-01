import React from 'react';

const Offcanva = () => {
    return (
        
            <div>
            <a className="position: sticky btn btn-primary text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">V</a>


<div className="offcanvas offcanvas-start bg-blue-800 text-xl" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-body">
    
    <div className="dropdown px-2  -my-4">
      <ul className="bg-blue-900 text-white list-group list-group-flush">
        
  <li className="list-group-item pb-4  text-white bg-blue-900"><i class="fa-solid fa-user"></i>Hello, User<i class="fa-solid fa-bell"></i></li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900"><i class="fa-duotone fa-message-captions"></i>Disscussion Fourm</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Market Stories</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Sentiment</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Market</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Sector</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Watchlist</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Events</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">News/Interview</li>
  <li className=" text-white bg-blue-800 hover:bg-blue-900">Placement</li>
</ul>
    </div>
  </div>
</div>

            </div>
    );
}

export default Offcanva;
