'use client'
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main>
      {/* Banner and Heading Section  */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose a plan that fits your needs.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">$10/month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Weekly Update</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Customer Support</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Get Started</button>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-purple-500 flex flex-col transform transition-transform duration-300 hover:scale-105">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Pro</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">$30/month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">50GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Up to 5 Users</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Get Started</button>
              </div>
            </div>
            {/* Enterprise Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Enterprise</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">$50/month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">200GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">24/7 Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Real Time Update</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testinomail Section */}
      <section className="bg-white dark:bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">What Our Clients Say</h2>
            <p className="text-gray-700 dark:text-gray-300">Testimonials from our happy clients</p>
          </div>
          <div className="flex flex-wrap justify-center items-stretch space-x-4">
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-800 dark:text-gray-200">"This service is amazing! It has changed the way we do business."</p>
              <div className="mt-4 flex items-center">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="Client 1" />
                <div className="ml-4">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">John Doe</p>
                  <p className="text-gray-700 dark:text-gray-300">CEO, Company</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-800 dark:text-gray-200">"Highly recommend this service to anyone looking to improve their workflow."</p>
              <div className="mt-4 flex items-center">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="Client 2" />
                <div className="ml-4">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">Jane Smith</p>
                  <p className="text-gray-700 dark:text-gray-300">CTO, Another Company</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm mx-4 my-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-800 dark:text-gray-200">"Highly recommend this service to anyone looking to improve their workflow."</p>
              <div className="mt-4 flex items-center">
                <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="Client 2" />
                <div className="ml-4">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">Jane Smith</p>
                  <p className="text-gray-700 dark:text-gray-300">CTO, Another Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top blog section */}
      <section className="bg-gray-200 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Top Blogs</h2>
            <p className="text-gray-700 dark:text-gray-300">Check out our latest articles</p>
          </div>
          <div className="flex flex-wrap justify-center items-stretch space-x-4">
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 rounded-lg object-cover" src="/first.jpg" alt="Blog 1" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 1</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here.</p>
              <Button onClick={() => { alert("Heyy Read More Button is Clicked") }} className="mt-4" variant="outline">Read More</Button>
            </div>
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 rounded-lg object-cover" src="/second.jpg" alt="Blog 2" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 2</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here.</p>
              <Button onClick={() => { alert("Heyy Read More Button is Clicked") }} className="mt-4" variant="outline">Read More</Button>
            </div>
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 rounded-lg object-cover" src="/third.jpg" alt="Blog 3" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 3</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here.</p>
              <Button onClick={() => { alert("Heyy Read More Button is Clicked") }} className="mt-4" variant="outline">Read More</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
