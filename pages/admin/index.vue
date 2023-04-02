<template>
    <div>

        <AdminNav />

        <div class="p-4 sm:ml-64 pt-16 ">
            <div class="w-full h-full items-center">
                <div class="flex flex-col lg:flex-row w-full lg:space-x-6 space-y-2 lg:space-y-0 mb-2 lg:mb-4 pt-5">
                    <div class="w-full lg:w-1/3 ">
                        <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-green-400">
                            <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                            clipRule="evenodd" />
                                        <path
                                            d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                    </svg>

                                </div>
                                <div class="flex flex-col justify-center">
                                    <div class="text-lg font-semibold text-gray-800">90</div>
                                    <div class="text-sm text-gray-400">Total Users</div>
                                    <div class="mt-1">
                                        <NuxtLink to="/admin/user"
                                            class="py-0.5 px-2 bg-green-400 rounded-full hover:bg-green-500 text-white font-semibold mt-1">
                                            Lihat</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 ">
                        <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-sky-400">
                            <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-sky-400 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z"
                                            clip-rule="evenodd" />
                                        <path
                                            d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                                    </svg>


                                </div>
                                <div class="flex flex-col justify-center">
                                    <div class="text-lg font-semibold text-gray-800">150</div>
                                    <div class="text-sm text-gray-400">Total Transaksi</div>
                                    <div class="mt-1">
                                        <NuxtLink to="/admin/meme"
                                            class="py-0.5 px-2 bg-sky-400 rounded-full hover:bg-sky-500 text-white font-semibold mt-1">
                                            Lihat</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 ">
                        <div class="widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-rose-400">
                            <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-rose-400 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                                            clip-rule="evenodd" />
                                    </svg>


                                </div>
                                <div class="flex flex-col justify-center">
                                    <div class="text-lg font-semibold text-gray-800">100</div>
                                    <div class="text-sm text-gray-400">Total Obat</div>
                                    <div class="mt-1">
                                        <NuxtLink to="/admin/meme/accept"
                                            class="py-0.5 px-2 bg-rose-400 rounded-full hover:bg-rose-500 text-white font-semibold mt-1">
                                            Lihat</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" widget w-full p-4 rounded-lg bg-gray-50 bg-opacity-50 border-l-4 border-slate-800">

                    <h3 class="text-left font-semibold text-3xl text-gray-900 ">Activity Log</h3>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>

    </div>
</template>

<script setup>
import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips
} from 'flowbite'

onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>
