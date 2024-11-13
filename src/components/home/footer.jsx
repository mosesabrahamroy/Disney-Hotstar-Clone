export default function Footer() {
  return (
    <>
      <footer className="footer text-white font-semibold bg-black">
        <div className="container">
          <div className="ml-28 row sm:flex sm:justify-between">
            <div className="col-3">
              <h3>Company</h3>
              <ul className="text-gray-400 mb-6 text-sm">
                <li className="mt-5">
                  <a href="#">About Us</a>
                </li>
                <li className="mt-3">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>View Website in</h3>
              <ul className="text-gray-400 text-sm">
                <li className="mt-5 mb-3">
                  <a href="#"><i class="fa-solid fa-check me-2"></i>English</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Need Help?</h3>
              <ul className="text-gray-400 text-sm">
                <li className="mt-5">
                  <a href="#">Visit Help Center</a>
                </li>
                <li className="mt-3 mb-3">
                  <a href="#">Share Feedback</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3 >Connect with Us</h3>
              <ul className=" flex space-x-8 mt-4 text-2xl">
                <li >
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex  ml-28 sm:justify-between text-sm">
          <div className="copyright text-gray-400">
            <p>&copy; 2024 STAR. All Rights Reserved.</p>
            <ul className="flex space-x-5 ">
              <li className="mt-3">
                <a href="#">Terms Of Use</a>
              </li>
              <li className="mt-3">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mt-3">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="app-store flex md:ml-10 mb-5 md:mb-10 mt-10">
            <a href="#">
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
                className="h-10 mb-4"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
