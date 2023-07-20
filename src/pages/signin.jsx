import { getProviders, getSession, signIn } from 'next-auth/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { HomeIcon, LoginIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function SignIn({ providers }) {
  return (
    <div>
      <Header />
      <div className=" mx-auto my-4 flex h-full w-4/5 items-center justify-center ">
        <div className=" flex flex-col rounded-2xl border bg-amazon_blue p-10 pt-8 font-semibold text-white shadow-md ">
        <Link href="/">
            <svg width="48" height="50" color='white' style={{marginLeft: '10px'}} viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6761 24.1784V12.0892H25C25 5.45775 19.4366 0 12.6761 0C5.91549 0 0.352113 5.45775 0.352113 12.0892C0.352113 18.7207 5.91549 24.1784 12.6761 24.1784ZM35.2113 50V37.9108H47.5352C47.5352 31.2793 41.9718 25.8216 35.2113 25.8216C28.4507 25.8216 22.8873 31.2793 22.8873 37.9108C22.8873 44.5423 28.4507 50 35.2113 50ZM35.2113 23.8263L47.8873 0.352113H22.5352L35.2113 23.8263ZM25.3521 26.1737L12.6761 49.6479L0 26.1737H25.3521Z" fill="currentColor"></path></svg>
          </Link>
          <hr className="-mx-10 mt-1" />
          <h1 className="m-auto my-5 text-3xl sm:text-4xl">
            Welcome To Your Library
          </h1>
          <p className="text-center text-lg md:text-xl">
            Please SignIn with your Google Account
          </p>
          <p className="text-center text-lg md:text-xl">
            To enjoy our services.
          </p>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="link mx-auto my-4 flex w-3/4 items-center justify-evenly rounded-2xl bg-green-600 p-4 text-lg font-semibold text-white shadow-md hover:border-none md:text-xl"
              >
                <LoginIcon className="text-md mr-1 h-10" />
                Sign in with {provider.name}
              </button>
            </div>
          ))}
          <p className="text-center text-xl">
            Note : More Providers will be added soon!!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
