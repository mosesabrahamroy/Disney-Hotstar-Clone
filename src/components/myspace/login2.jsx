import React from 'react';

export default function Login2() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="flex flex-col justify-center items-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-white mb-5 text-lg font-semibold">Login or sign up to continue</h2>
          <div className="flex justify-center items-center mb-5">
            <div className="flex flex-col items-center mr-5">
              <img 
                src="./src/assets/qr.png" 
                alt="QR Code" 
                className="w-40 h-40 mb-2.5"
              />
              <p className="text-gray-400 text-center">
                Use Camera App to Scan QR
                <br />
                Click on the link generated to redirect to Disney+ Hotstar mobile app
              </p>
            </div>
            <div className="border-l border-gray-600 h-40"></div>
            <div className="flex flex-col items-center ml-5">
              <div className="flex items-center mb-2.5">
                <select 
                  className="px-3 py-2 rounded-l border border-gray-600 text-white bg-gray-700"
                  defaultValue="+91"
                >
                  <option value="+91">+91</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter mobile number" 
                  className="px-4 py-2 rounded-r border border-gray-600 text-white bg-gray-700 placeholder-gray-400 ml-2"
                />
              </div>
              <p className="text-gray-400 text-xs">
                By proceeding you confirm that you are above 18 years of age and agree to the 
                <a href="#" className="text-blue-500"> Privacy Policy </a> 
                & <a href="#" className="text-blue-500"> Terms of Use </a>.
              </p>
            </div>
          </div>
          <a href="#" className="text-blue-500">Having trouble logging in? Get Help</a>
        </div>
      </div>
    </>
  );
}
