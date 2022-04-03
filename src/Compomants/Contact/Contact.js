import React from "react";

const Contact = () => {


  return (
    <div>
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-4xl">Contact Us, Our Office Address Down Below </h1>
        <div className="my-5">
          <button onClick="showData" className="py-2 px-10 rounded-lg shadow-lg ml-2 bg-teal-800 text-white">
            BD Address
          </button>
          <button className="py-2 px-10 rounded-lg shadow-lg ml-2 bg-cyan-900 text-white">
            US Address
          </button>
        </div>
      </div>
<div className="flex justify-center items-center my-20">

<div id='bnag' className="w-[70%] bg-cyan-500 md:flex px-16 bangledesh rounded-md shadow-lg py-10 justify-between items-center">
        <div>
         <h1>Street: 17/4 Dhanmondi.</h1>
         <h1>City: Dhaka</h1>
         <h1>Phone: +8801622222456</h1>
         <h1>Email: contact.bd@cc.com</h1>
        </div>
        <div>
          <h1 className="text-2xl">BANGLADESH OFFICE</h1>
        </div>
      </div>
</div>
      


    </div>
  );
};

export default Contact;
