<template>
    <div>
        <KasirNav/>
        <div class="p-4 sm:ml-64 pt-10">
            <div class="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h4 class="text-left font-semibold text-2xl text-gray-700  ">Tambah Transaksi</h4>
                
                <form action="" class="space-y-6">
                    <div class="grid grid-cols-4 w-full gap-4">
                        <div class="col-span-2 mt-3 ">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Pilih Resep</label>
                            <input type="text" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                            <h3 class="text-base font-semibold text-gray-600 py-2">Tgl Resep : </h3>
                            <h3 class="text-base font-semibold text-gray-600 py-2">Nama Pasien : </h3>
                            <h3 class="text-base font-semibold text-gray-600 py-2">Nama Dokter:</h3>
                        </div>
                        <div class="col-span-2 mt-3">
                            <label for="" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Pilih Obat</label>
                            <input type="text" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                                <h3 class="text-base font-semibold text-gray-600 py-2">Harga : </h3>
                                <h3 class="text-base font-semibold text-gray-600 py-2">Quantity : </h3>

                        </div>
                        
                       
                    </div>
                    <hr/>
                            <h3 class="text-base font-semibold text-gray-600 ">total  : </h3>
                            <input type="number" name="" id=""
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-1/4 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                                placeholder="masukan jumlah bayar">
                                <h3 class="text-base font-semibold text-gray-600 ">kembalian:</h3>
             
                    <button
                        class="py-1.5 px-3 rounded-md bg-sky-500 hover:bg-sky-400 hover:transition duration-500 text-white font-semibold">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
