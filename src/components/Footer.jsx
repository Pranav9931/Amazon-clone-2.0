import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="static bottom-0 w-full overflow-hidden">
      <div className="bg-amazon_blue-light md:px-5 lg:px-10">
        <div className="flex flex-col flex-wrap items-center justify-center space-x-6 space-y-5 pb-8 pt-4 text-white sm:flex-row sm:items-baseline md:space-x-10 lg:space-x-12 xl:space-x-24">
          <div className="ml-3">
            <h1 className="mb-2 text-xl font-bold">GET TO KNOW US</h1>
            <ul className="font-semibold">
              <li className="link">About Us</li>
              <li className="link">Careers</li>
              <li className="link">Press Release</li>
              <li className="link">Devrev Cares</li>
              <li className="link">Gift a Smile</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-xl font-bold">CONNECT WITH US</h1>
            <ul className="font-semibold">
              <li className="link">Facebook</li>
              <li className="link">Twitter</li>
              <li className="link">Instagram</li>
            </ul>
          </div>

          <div className="hidden lg:flex lg:flex-col">
            <h1 className="mb-2 text-xl font-bold">MAKE MONEY WITH US</h1>
            <ul className="font-semibold">
              <li className="link">Sell On Devrev</li>
              <li className="link">Devrev Global Selling</li>
              <li className="link">Become an Affiliate</li>
              <li className="link">Fulfilment by Devrev</li>
              <li className="link">Advertise Your Products</li>
              <li className="link">Devrev Pay on Merchants</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-xl font-bold ">LET US HELP YOU</h1>
            <ul className="font-semibold">
              <li className="link">COVID-19 and Devrev</li>
              <li className="link">Your Account</li>
              <li className="link">Returns Center</li>
              <li className="link">100% Purchase Protection</li>
              <li className="link">Help</li>
              <li className="link">Devrev App Download</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-evenly border-t border-gray-600 bg-amazon_blue pt-4 font-semibold text-white">
      <Link href="/">
            <svg width="48" height="50" color='white' style={{marginLeft: '10px'}} viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6761 24.1784V12.0892H25C25 5.45775 19.4366 0 12.6761 0C5.91549 0 0.352113 5.45775 0.352113 12.0892C0.352113 18.7207 5.91549 24.1784 12.6761 24.1784ZM35.2113 50V37.9108H47.5352C47.5352 31.2793 41.9718 25.8216 35.2113 25.8216C28.4507 25.8216 22.8873 31.2793 22.8873 37.9108C22.8873 44.5423 28.4507 50 35.2113 50ZM35.2113 23.8263L47.8873 0.352113H22.5352L35.2113 23.8263ZM25.3521 26.1737L12.6761 49.6479L0 26.1737H25.3521Z" fill="currentColor"></path></svg>
          </Link>
        <h1 className="-mt-1 text-xl md:text-2xl">© Aryan Raj</h1>
      </div>
      <p className="flex flex-grow justify-evenly border-t border-gray-600 bg-amazon_blue p-2 text-center font-semibold text-white">
        Note : This has been made only for educational purposes. No copyright
        intended.
      </p>
    </div>
  )
}

export default Footer
