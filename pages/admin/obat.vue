<template>
    <div>
        <AdminNav />
        <div class="p-4 sm:ml-64 pt-20">
            <div class="w-full widget  p-4 rounded-lg bg-white bg-opacity-50 border-l-4 shadow-sm border-gray-800">
                <h3 class="text-left font-semibold text-gray-700 text-3xl mb-5">tambah obat</h3>
                <form action="" class="space-y-6">
                    <div class="grid grid-cols-4 w-full">
                        <div class="col-span-2 px-5 mt-3 ">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode
                                Obat</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-2 px-5 mt-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                                Obat</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-2 px-5 mt-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">expired
                                date
                            </label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-1 px-5 mt-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah
                            </label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="col-span-1 px-5 mt-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga
                                Perunit</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                    </div>
                    <button
                        class="py-1.5 px-3 mx-5 rounded-md bg-sky-500 hover:bg-sky-400 hover:transition duration-500 text-white font-semibold">tambah</button>
                </form>
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
