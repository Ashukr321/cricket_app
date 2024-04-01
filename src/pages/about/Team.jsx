import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Team = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Dive into our extensive collection of cricket resources, featuring open-source tools, components, and elements designed to enhance your cricket experience.</p>
        </div> 
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Ashutosh */}
            <div class="text-center text-gray-500 dark:text-gray-400" data-aos="zoom-in">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/crackdevjob.appspot.com/o/cricket%20app%20data%2Fashutosh.jpg?alt=media&token=821c6c66-b918-418c-81b0-9f6a316f9207" alt="Ashutosh kumar"/>
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>Ashutosh kumar</a>
                </h3>
                <p>Developer</p>
                <ul class="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100036740010945" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/Ashukr321/" target='_blank' class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>
            {/* himanshu */}
            <div class="text-center text-gray-500 dark:text-gray-400" data-aos="zoom-in">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/crackdevjob.appspot.com/o/cricket%20app%20data%2Fhimanshu.jpg?alt=media&token=9ecf550b-5b71-4ef5-b2c7-2a2c567acba1" alt="Ashutosh kumar"/>
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="https://www.linkedin.com/in/himanshu-kumar-b6b96b248" target='_blank'>Himanshu Sharma</a>
                </h3>
                <p>Developer</p>
                <ul class="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/himxxxxhu?mibextid=ZbWKwL" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/himanshu-010" target='_blank' class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>

            {/* niraj */}
            <div class="text-center text-gray-500 dark:text-gray-400" data-aos="zoom-in">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/crackdevjob.appspot.com/o/cricket%20app%20data%2Fniraj.jpg?alt=media&token=789054fb-185d-4011-a2c4-ee6fc56f529b" alt="Ashutosh kumar"/>
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="https://nirajkrsingh.vercel.app/#home" target='_blank'>Niraj Kumar Singh
</a>
                </h3>
                <p>Developer</p>
                <ul class="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=1000148903581115" target='_blank' class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/nirajkumarsingh51" target='_blank' class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    
                </ul>
            </div>
            {/* angel */}

        </div>  
    </div>
  </section>
  )
}

export default Team