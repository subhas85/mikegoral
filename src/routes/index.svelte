<script context="module">
    import Client from './../../utils/client';
    import PrismicDom from 'prismic-dom';

    
    export async function load({fetch}) {
      const document = await Client.getByUID('page','homepage');
      const res = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&&maxResults=25&playlistId=PLjbCUr0mvSc6Spk5A34HcmscFuNCD7wEw&key=AIzaSyCX0hzH8Ts0t80Mp4asrLFkLTKFuIFNRVw");
      const ytList = await res.json();
      const ytListitems = ytList.items
        
      return {
        props: {
          document,
          ytListitems
        }
      };
    }

  </script> 


<script>

    export let document;
    export let ytListitems;
    let promise = Promise.resolve([]);

    async function fetchUsers() {
		const response = await self.fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&&maxResults=15&playlistId=PLBhKKjnUR0XAIAK-HDMvwQ7sx5UXe9zeK&key=AIzaSyCX0hzH8Ts0t80Mp4asrLFkLTKFuIFNRVw');

		if (response.ok) {
  		return response.json();
			
		} else {
			throw new Error(users);
		}
	}

    function handleClick() {
		// Now set it to the real fetch promise 
        promise = fetchUsers();
        console.log(promise)
	}

  
</script>

<svelte:head>
    <title>{document.data.title}</title>
    <meta name="description" content="Chances are you’ve heard Mike talking on various television networks across America" />
    <meta name="keywords" content="Voiceover, film voiceover, commercial voiceover" />
    <meta name="author" content="Mike Goral's website" />
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<!-- body wrapper -->
<div class="font-body">

    <!-- For testing Prismic API -->
    <!-- <div>
        <span>from prismic</span>
        <pre>{JSON.stringify(document, null, 2)}</pre>
    </div> -->

    <!-- <div>
        {document.booking_details}
    </div> -->
    
    
    <!-- <div class="container">
        {#each ytListitems as item}
            <p>{item.contentDetails.videoId}</p>
        {/each}
    </div> -->

    <!-- Logo section -->
    <header class="max-w-full mx-3 lg:mx-14 xl:mx-32 ">
        <div class="flex justify-center items-center py-8">
            <img class="h-8" src="https://i.ibb.co/ZmJQKmz/mikegoral-logo.png" alt="mikegoral-logo" border="0">
        </div>
    </header>

    <!-- Hero section with menu -->
    <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-gray-300 re" >
       
        <!-- menu/nav starts here -->
        <div class="h-[418px] md:h-[618px] bg-center bg-cover relative" style="background-image: url('{document.data.image.url}');">
             <!-- hero graphic -->
             <div class="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img class="" src="{document.data.featured_image.url}" alt="7" border="0">
             </div>
           
            <!-- main navigation desktop -->
            <nav class="md:flex justify-center items-center gap-6 hidden py-8">
                <a href="#featured">DEMOS</a>
                <div class="h-4 w-px bg-gray-400"></div>
                <a href="#featured">FEATURED WORK</a>
                <div class="h-4 w-px bg-gray-400"></div>
                <a href="#about">ABOUT MIKEGORAL</a>
                <div>
                <a href="#book" class="bg-[#12b4de] font-medium px-4 py-1">BOOK MIKE</a>
                </div>
            </nav>
        
        </div>
    </section>

    <!-- testing -  -->
    <div id="player"></div>
    

    <!-- Featured work section -->
    <section id="featured" class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]" >
        <div class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-10 lg:pt-[9rem] pb-20">
            <!-- video full view + filter options -->
            <div class="flex flex-col lg:flex-row lg:justify-between gap-[5rem]">
                <div class="space-y-2">
                    <h1 class="text-3xl text-[#12b4de] font-bold">FEATURED</h1>
                    <h1 class="text-5xl text-[#202427] font-bold pb-4">WORK</h1>
                    <div class="h-1 w-10 bg-gray-800 "></div>
                    <div class="pt-6">
                        <ul class="flex flex-row flex-wrap lg:flex-col gap-2 gap-x-3 text-lg cursor-pointer items-center lg:items-start">
                            <li class="hover:text-[#12b4de] hover:font-medium" on:click="{()=>{handleClick()}}">View All</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium" on:click="{()=>{handleClick()}}">Promo</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium" on:click="{()=>{handleClick()}}">Imaging</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium" on:click="{()=>{handleClick()}}">Narration</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium" on:click="{()=>{handleClick()}}">Commercial</li>
                            <li class="h-4 w-[2px] bg-gray-500 lg:hidden"></li>
                            <li class="hover:text-[#12b4de] hover:font-medium">Industrial</li>
                        </ul>
                    </div>
                </div>
                <div class="youtube">
                    <iframe class="responsive-iframe" src="https://www.youtube.com/embed/videoseries?list=PLjbCUr0mvSc6Spk5A34HcmscFuNCD7wEw" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>

            <!-- video thumbnail carousel -->
            <div class='flex relative items-center gap-5'>
                <svg class="absolute -left-14 w-8 h-8 hidden lg:block" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <div class="mt-8 flex gap-4 flex-row justify-between overflow-x-scroll pb-2">
                
                   
                        {#await promise}
                            {#each ytListitems as ytItem}
                                <div class='flex bg-green-400 flex-shrink-0'>
                                    <iframe class="w-[15rem] 2xl:w-[15rem] 2xl:h-[8.438rem]" src="https://www.youtube.com/embed/{ytItem.contentDetails.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                           {/each}
                        {:then ytList}
                            {#each ytList.items as {contentDetails} }
                                <div class='flex bg-green-400 flex-shrink-0'>
                                    <iframe class="w-[15rem] 2xl:w-[15rem] 2xl:h-[8.438rem]" src="https://www.youtube.com/embed/{contentDetails.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            {/each}
                        {:catch error}
                            <p style="color: red">{error.message}</p>
                        {/await}
                   
                 
                </div>
                <svg class="absolute -right-14 w-8 h-8 hidden lg:block" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
            
        </div>
          
            
       
    </section>

    <!-- About section -->
    <section id="about" class="max-w-full mx-8 lg:mx-14 xl:mx-32 mt-[3.5rem] xl:mt-[7rem] " >
        <div class="flex flex-col">
            <div class="flex flex-col-reverse md:flex-row gap-[4rem] 2xl:gap-[8rem] items-center">
                <img class="w-full" src="{document.data.about_image.url}" alt="3" border="0">
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
                            {@html PrismicDom.RichText.asHtml(document.data.content)}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:gap-[4rem] 2xl:gap-[8rem] items-center mt-8 md:mt-0">
                <div class="w-full xl:w-10/12">
                    <p class="leading-loose">
                        {@html PrismicDom.RichText.asHtml(document.data.about_description_2nd_part)}
                    </p>
                </div>
                
                <img src="{document.data.about_2nd_image.url}" alt="sound-wave-mike-goral" border="0">
                
            </div>
        </div>
    </section>

    <!-- Book mike goral section -->
    <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]" >
        <div class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-32 pb-20">
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
                            <p class=" w-[12rem]">
                                Atlas
                                15 East 32nd Street
                                New York, New York-10016
                            </p>
                       
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
                            <a href = "mailto: jude@fostertalent.com">jude@fostertalent.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact mike form -->
    <footer id="book" class="max-w-full mx-3 lg:mx-14 xl:mx-32 border bg-cover bg-center" style="background-image: url('https://i.ibb.co/ZctjkQB/bg-footer.jpg');">
        <div class="flex flex-col justify-center items-center gap-8 mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] py-16 ">
            <h1 class="text-2xl font-bold text-white">CONTACT MIKE DIRECTLY</h1>
            <div class="flex flex-col gap-4 w-full md:w-[40rem]  items-center">
                <div class="flex flex-col md:flex-row gap-3 w-full">
                    <input class=" p-3 border w-full bg-[#ffffff00] text-white" type="text" placeholder="Name">
                    <input class=" p-3 border w-full bg-[#ffffff00] text-white" type="email" placeholder="Email">
                </div>
                <textarea class="p-2 w-full border bg-[#ffffff00] text-white" name="description" id="emailBody" cols="10" rows="5">Message</textarea>
                <input class="bg-[#12b4de] w-[12rem] py-2 text-white cursor-pointer font-medium hover:bg-[#14a7cc] bg-opacity-90 mt-6" type="submit" value="Send">
            </div>
            
        </div>
       
    </footer>
    <footer class="max-w-full mx-3 lg:mx-14 xl:mx-32 flex justify-between items-center mt-3 pb-10">
        <h5 class=" underline text-gray-400 text-sm">©mikegoral.com All rights reserved</h5>
        <div class="flex items-center gap-3">
            <a href="{document.data.instagram_link.url}" class="bg-[#12b4de] w-10 h-10 rounded-full flex items-center justify-center"><i class="gg-instagram text-white"></i></a>
            <a href="{document.data.linkedin__link.url}" class="bg-[#12b4de] w-10 h-10 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="22" height="22" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
        </div>
    </footer>
</div>

<style>
@import url('https://css.gg/instagram.css');

.youtube {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 44.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>