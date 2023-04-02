<template>
    <div>
        <AdminNav />
        <div class="p-4 sm:ml-64 pt-20 ">
            <div class="flex flex-col lg:flex-row w-full lg:space-x-6 space-y-2 lg:space-y-0 mb-2 lg:mb-4 pt-5">
                <div class="w-full lg:w-1/2 ">
                    <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-green-400">
                        <div class="flex items-center">
                            <div class="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                </svg>



                            </div>
                            <div class="flex flex-col justify-center">
                                <div class="text-lg font-semibold text-gray-800">Invite Kasir & Apotik</div>
                                <div class="text-sm text-gray-400">Masukan email untuk invite kasir/apotik </div>
                                <div class="mt-1">
                                    <div class="flex items-center">
                                        <div class="relative mr-2">
                                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                    </path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <input type="text" id="input-group-1"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                                placeholder="name@.com">
                                        </div>
                                        <button
                                            class="bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded-md">
                                            send
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="w-full text-sm mt-5 text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            nama user
                        </th>
                        <th scope="col" class="px-6 py-3">
                            role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-rose-600 dark:text-rose-500 hover:underline">delete</a>
                        </td>

                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">

                            <a href="#" class="font-medium text-rose-600 dark:text-rose-500 hover:underline">delete</a>
                        </td>

                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">

                            <a href="#" class="font-medium text-rose-600 dark:text-rose-500 hover:underline">delete</a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>


</script>
