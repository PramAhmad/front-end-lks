<template>
    <div id="resep">
        <ApotikNav/>
        <div class="p-4 sm:ml-64 pt-10">
            <div class="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h4 class="text-left font-semibold text-2xl text-gray-700  ">Kelola Resep</h4>
                
                <form action="" class="space-y-6">
                    <div class="grid grid-cols-4 w-full gap-4">
                        <div class="col-span-2 mt-3 ">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">No Resep</label>
                            <input type="number" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-2 mt-3">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Nama
                                Pasien</label>
                            <input type="text" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-2 mt-3">
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Nama Dokter
                            </label>
                            <input type="text" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-1 mt-3">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">tanggal
                            </label>
                            <input type="date" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-1 mt-3">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">jumlah obat</label>
                            <input type="number" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                    </div>
                    <button
                        class="py-1.5 px-3 rounded-md bg-sky-500 hover:bg-sky-400 hover:transition duration-500 text-white font-semibold">tambah</button>
                </form>
            </div>
            <!-- end of form -->
            <div class="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-opacity-50 mt-5">
<div class="flex flex-wrap justify-between">
    <h3 class="text-left font-semibold text-2xl text-gray-900 ">List All Resep </h3>

<form class="w-1/4">   
 
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="cari resep..." required>
       
    </div>
</form>
</div>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Nama Pasien
                </th>
                <th scope="col" class="px-6 py-3">
                    No Resep  
                </th>
                <th scope="col" class="px-6 py-3">
                    Nama Dokter
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal
                </th>
                <th scope="col" class="px-6 py-3">
                    Jumlah Obat
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
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#"
                        class="font-medium text-sky-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
          
        </tbody>
    </table>
</div>
</div>
        </div>
    </div>
</template>

<script setup>

</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#resep{
    font-family: 'Open Sans', sans-serif;
}
</style>