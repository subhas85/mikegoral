<script>

</script>

<!-- body wrapper -->
<div class="font-body">

    <!-- Logo section -->
    <header class="max-w-full mx-3 lg:mx-14 xl:mx-32 ">
        <div class="flex justify-center items-center py-8">
            <img class="h-8" src="https://i.ibb.co/ZmJQKmz/mikegoral-logo.png" alt="mikegoral-logo" border="0">
        </div>
    </header>

    <!-- Hero section with menu -->
    <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-gray-300 re" >
       
        <!-- menu/nav starts here -->
        <div class="h-[418px] md:h-[618px] bg-center bg-cover relative" style="background-image: url('https://i.ibb.co/WyGpBQT/bg-hero-section.jpg');">
             <!-- hero graphic -->
             <div class="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img class="" src="https://i.ibb.co/tBS87F4/7.png" alt="7" border="0">
             </div>
           
            <!-- main navigation desktop -->
            <nav class="md:flex justify-center items-center gap-6 hidden py-8">
                <a href="/">DEMOS</a>
                <div class="h-4 w-px bg-gray-400"></div>
                <a href="/">FEATURED WORK</a>
                <div class="h-4 w-px bg-gray-400"></div>
                <a href="/">ABOUT MIKEGORAL</a>
                <div>
                <button class="bg-[#12b4de] font-medium px-4 py-1">BOOK MIKE</button>
                </div>
            </nav>
        
        </div>
    </section>

    <!-- Featured work section -->
    <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]" >
        <div class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-10 lg:pt-[9rem] pb-9">
            <!-- video full view + filter options -->
            <div class="flex flex-col lg:flex-row lg:justify-between gap-[5rem]">
                <div class="space-y-2">
                    <h1 class="text-3xl text-[#12b4de] font-bold">FEATURED</h1>
                    <h1 class="text-5xl text-[#202427] font-bold pb-4">WORK</h1>
                    <div class="h-1 w-10 bg-gray-800 "></div>
                    <div class="pt-6">
                        <ul class="flex flex-row flex-wrap lg:flex-col gap-2 gap-x-3 text-lg cursor-pointer items-center lg:items-start">
                            <li class="hover:text-[#12b4de] hover:font-medium">View All</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Promo</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Imaging</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Narration</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Commercial</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Industrial</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/cDY5jcM/video-cover.jpg" alt="video-cover" border="0">
                </div>
            </div>
            <!-- video thumbnail carousel -->
            
            <div class='flex relative items-center gap-5'>
                <svg class="absolute -left-14 w-8 h-8 hidden lg:block" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <div class="mt-8 flex gap-4 flex-row justify-between overflow-x-scroll pb-2">
                
                    {#each Array(6) as _}
                        <div class='flex bg-green-400 flex-shrink-0'>
                            <img class="h-[6rem] lg:h-[8.45rem] object-contain bg-"  src="https://i.ibb.co/cDY5jcM/video-cover.jpg" alt="video-cover" border="0">
                        </div>
                    {/each}
                </div>
                <svg class="absolute -right-14 w-8 h-8 hidden lg:block" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
            
        </div>
          
            
       
    </section>

    <!-- About section -->
    <section class="max-w-full mx-8 lg:mx-14 xl:mx-32 mt-[3.5rem] xl:mt-[7rem] " >
        <div class="flex flex-col">
            <div class="flex flex-col-reverse md:flex-row gap-[4rem] 2xl:gap-[8rem] items-center">
                <img class="w-full" src="https://i.ibb.co/BNMF8TS/3.png" alt="3" border="0">
                <div class="flex flex-col gap-8 items-end">
                    <div class="flex flex-col gap-2 text-right">
                        <h1 class="text-3xl text-[#12b4de] font-bold">ABOUT</h1>
                        <h1 class="text-5xl text-[#202427] font-bold pb-4">MIKE GORAL</h1>
                        <div class="flex justify-end">
                            <div class="h-1 w-10 bg-gray-800"></div>
                        </div>
                        
                    </div>
                    <div class="w-full xl:w-10/12">
                        <p class="text-right leading-loose">
                            After being kicked out of class for excessive talking on a regular basis, Mike decided to make a career 
                            out of talking. Chances are you’ve heard Mike talking on various television networks across America. 
                            You can hear him on numerous network promos, long-form series narrations, commercials and radio stations.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:gap-[4rem] 2xl:gap-[8rem] items-center mt-8 md:mt-0">
                <div class="w-full xl:w-10/12">
                    <p class="leading-loose">
                        Millions of people hear Mike Goral‘s voice every day! He has done voiceovers for The Rachael Ray Show, CNN, A&E, HBO, 
                        Showtime, Cartoon Network, Food Network, The Weather Channel, Discovery, HGTV, DIY, Smithsonian Channel,  and many others.
                    </p>
                </div>
                
                <img src="https://i.ibb.co/6nCG05X/sound-wave-mike-goral.jpg" alt="sound-wave-mike-goral" border="0">
                
            </div>
        </div>
    </section>

    <!-- Book mike goral section -->
    <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]" >
        <div class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-32 pb-9">
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl text-[#12b4de] font-bold">BOOK</h1>
                <h1 class="text-5xl text-[#202427] font-bold pb-4">MIKE GORAL</h1>
                <div class="h-1 w-10 bg-gray-800"></div>
            </div>
            <div class="flex flex-col md:flex-row mt-[2rem] gap-[3rem] md:gap-[4rem] lg:gap-[8rem]">
                <div class="flex flex-col">
                    <div>
                        <h1 class="font-bold text-[#12b4de]">NEW YORK</h1>
                        <div class="mt-4 space-y-1">
                           <h4>Atlas</h4>
                           <h4>15 East 32nd Street</h4>
                           <h4>New York, New York-10016</h4>
                           <h4>15 East 32nd Street</h4>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h1 class="font-bold text-gray-500">Lisa Marber-Rich</h1>
                        <div class="mt-1 space-y-2">
                           <h4>Promos/ Narration</h4>
                           <h4>lisa@atlastalent.com</h4>
                           <h4>Jonn Wasser</h4>
                           <h4>jonn@atlastalent.com</h4>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>
                        <h1 class="font-bold text-[#12b4de]">LOS ANGELES</h1>
                        <div class="mt-4 space-y-1">
                           <h4>Atlas</h4>
                           <h4>8721 Sunset Blvd.</h4>
                           <h4>West Hollywood,</h4>
                           <h4>CA 90069</h4>
                           <h4>310-324-9800</h4>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h1 class="font-bold text-gray-500">Heather Vergo</h1>
                        <div class="mt-1 space-y-2">
                           <h4>Promos/ Narration</h4>
                           <h4>Commercials</h4>
                           <h4>heather@atlastalent.com</h4>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div>
                        <h1 class="font-bold text-[#12b4de]">TORONTO</h1>
                        <div class="mt-4 space-y-1">
                           <h4>Foster Talent</h4>
                           <h4>530 Queen St. East</h4>
                           <h4>Toronto, ON M5A 1V2</h4>
                           <h4>416-309-7373</h4>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h1 class="font-bold text-gray-500">Jude Foster</h1>
                        <div class="mt-1 space-y-2">
                           <h4>jude@fostertalent.com</h4>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<style>

</style>