'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import Github from "@/app/assets/github.png"
import Image from "next/image";


export default function SignUp(){

const handleClick = async () => {
  await signIn("Github") 
}


    return (
       <>
       
       <div className="mt-16 font-[sans-serif] bg-gray-50 flex items-center md:h-screen p-4">
  <div className="w-full max-w-3xl max-md:max-w-xl mx-auto">
    <div className="bg-white grid md:grid-cols-2 gap-12 w-full sm:p-8 p-6 shadow-md rounded-md overflow-hidden">
      <div className="max-md:order-1 space-y-6">
        <div className="md:mb-16 mb-8">
          <h3 className="text-gray-800 text-xl">Instant Access Github</h3>
        </div>
        <div className="space-y-4">
          <button
            type="button"
            className="px-4 py-2.5 flex items-center justify-center rounded-md text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              fill="#fff"
              className="inline shrink-0 mr-3"
              viewBox="0 0 167.657 167.657"
            >
              <path
                d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                data-original="#010002"
              />
            </svg>
            Continue with Facebook
          </button>
          <button
            type="button"
            className="px-4 py-2.5 flex items-center justify-center rounded-md text-gray-800 text-sm tracking-wider border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              fill="#fff"
              className="inline shrink-0 mr-3"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                data-original="#31aa52"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                data-original="#3c79e6"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                data-original="#cf2d48"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                data-original="#eb4132"
              />
            </svg>
            Continue with Google
          </button>
          <button
          onClick={handleClick}
            type="button"
            className="px-4 py-2.5 flex items-center justify-center rounded-md text-white text-sm tracking-wider border-none outline-none bg-black hover:bg-[#222]"
          >
            <Image
                      src={Github}
                      width={20}

                      className="inline shrink-0 mr-3" alt={""}        
            />
            Continue with Github
          </button>
        </div>
      </div>
      <form className="w-full">
        <div className="mb-8">
          <h3 className="text-gray-800 text-xl">Register</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Name</label>
            <div className="relative flex items-center">
              <input
                name="name"
                type="text"
                // required=""
                className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-4 h-4 absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                // required=""
                className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-4 h-4 absolute right-4"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  />
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                // required=""
                className="bg-white border border-gray-300 w-full text-sm text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-4 h-4 absolute right-4 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
            />
            <label
              htmlFor="remember-me"
              className="text-gray-800 ml-3 block text-sm"
            >
              I accept the{" "}
              <a
                href="javascript:void(0);"
                className="text-[#4A4666] font-semibold hover:underline ml-1"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <div className="!mt-8">
          <button
            type="button"
            className="w-full py-2.5 px-4 text-sm tracking-wider rounded-md bg-[#4A4666] hover:bg-[#464161] text-white focus:outline-none"
          >
            Create Account
          </button>
        </div>
        <p className="text-gray-800 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#4A4666] font-semibold hover:underline ml-1"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>

       
       </>
    )
}