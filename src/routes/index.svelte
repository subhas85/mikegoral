<script context="module">
  import Client from "./../../utils/client";
  import PrismicDom from "prismic-dom";

  export async function load({ fetch }) {
    const document = await Client.getByUID("page", "homepage");
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&&maxResults=25&playlistId=PL1VQcdkevaIG2MBFH29dO4jaFXd3cWR5z&key=AIzaSyA3RQytw7wxjReJNtILjpWxjIaZpkCPeq0"
    );
    const ytList = await res.json();
    const ytListitems = ytList.items;

    return {
      props: {
        document,
        ytListitems,
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  export let document;
  export let ytListitems;
  let promise = Promise.resolve([]);
  let playlistId = "";
  // Youtube playlists
  let ytPlaylist = document.data.playlists;
  // show hide all the videos
  let viewAll = true;
  // // get all the playlist items inside this array
  let playListItems=[];
  let AllPlayListItems=[];
  // Get all the playlist items from all the playlists
  async function fetchAllYtvideos(Id) {
    const response = await self.fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&&maxResults=15&playlistId=${Id}&key=AIzaSyA3RQytw7wxjReJNtILjpWxjIaZpkCPeq0`
    );
    if (response.ok) {
      playListItems = await response.json()
      return playListItems.items
    } else {
      throw new Error(error)
    }
  }

// get all the playlist items from all the playlists
async function getAllPlayListItems (){
  viewAll = true;
  ytPlaylist.forEach(playList => {
      let playListUrl = playList.youtube_playlist.url
      let newPlaylistId = youtube_playlist_parser(playListUrl)
      let items =fetchAllYtvideos(newPlaylistId)
      items.then((value)=>{
        value.forEach(
          (v) => {
            if(!AllPlayListItems.includes(v.contentDetails)){
              AllPlayListItems=[...AllPlayListItems, v.contentDetails]
            }
          }
        )
      })
    });
 
}

function getAllPlaylistsEvent(){
  AllPlayListItems=[]
  getAllPlayListItems()
}

onMount(()=>{
  getAllPlayListItems()
 
})

  // Get the playlist ids
  async function fetchYtvideos(playlistId) {
    const response = await self.fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&&maxResults=15&playlistId=${playlistId}&key=AIzaSyA3RQytw7wxjReJNtILjpWxjIaZpkCPeq0`
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(error);
    }
  }

  // parse id of the youtube playlist

  // validate url
  function youtube_validate(url) {
    var regExp = /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\S+)?$/;
    return url.match(regExp) && url.match(regExp).length > 0;
  }
  // get the id
  function youtube_playlist_parser(url) {
    var reg = new RegExp("[&?]list=([a-z0-9_-]+)", "i");
    var match = reg.exec(url);
    if (match && match[1].length > 0 && youtube_validate(url)) {
      return match[1];
    } else {
      return "nope";
    }
  }

//   playlist filter evnet on click
  function getYtVideos(url) {
    playlistId = youtube_playlist_parser(url);
    promise = fetchYtvideos(playlistId);
    viewAll = false;
  }

  let videoId;
  function updateYtVideo(id) {
    videoId = id;
  }

  let title;
  $: title = '';
  // handle contact for here
  let toEmail = document.data.contact_us_email_address;
  let fromEmail;
  let name;
  let message;
  let data;
  const submitForm = async () => {
    const submit = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        fromEmail,
        message,
        toEmail,
      }),
    });
    data = await submit.json();
  };

  //scrolling left right 
  let box
  function scroLeft(){
    box.scrollLeft += 270
  }
  function scroRight(){
    box.scrollLeft -= 270
  }

  // mobile nav toggle
  let mobileNav=false;
</script>

<svelte:head>
  <title>{document.data.title}</title>
  <meta
    name="description"
    content="Chances are you’ve heard Mike talking on various television networks across America"
  />
  <meta
    name="keywords"
    content="Voiceover, film voiceover, commercial voiceover"
  />
  <meta name="author" content="Mike Goral's website" />
  <meta name="robots" content="noindex nofollow" />
  <html lang="en" />
</svelte:head>

<!-- body wrapper -->
<div class="font-body">
  <!-- testing -  -->
  <!-- <div> <pre>{JSON.stringify(document.data.booking_details[0], null, 2)}</pre> </div> -->

  <!-- Logo section -->
  <header class="max-w-full mx-3 lg:mx-14 xl:mx-32 ">
    <div class="flex justify-between md:justify-center items-center py-8">
      <img
        class="h-8"
        src="https://i.ibb.co/ZmJQKmz/mikegoral-logo.png"
        alt="mikegoral-logo"
        border="0"
      />
      {#if !mobileNav}
        <span on:click="{()=>{mobileNav=!mobileNav}}" class="md:hidden border py-3 px-2"><i class="gg-menu"></i></span>
        {:else}
        <span on:click="{()=>{mobileNav=!mobileNav}}" class="md:hidden border p-1"><i class="gg-close"></i></span>
      {/if}
     
    </div>
  </header>

  <!-- Hero section with menu -->
  <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-gray-300">
    <!-- menu/nav starts here -->
    <div
      class="h-[418px] md:h-[618px] bg-center bg-cover relative"
      style="background-image: url('{document.data.image.url}');"
    >
      <!-- hero graphic -->
      <div
        class="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <img
          class=""
          src={document.data.featured_image.url}
          alt="7"
          border="0"
        />
      </div>

      <!-- main navigation desktop -->
      <nav class="relative hidden md:flex justify-center items-center gap-6 py-8">
        <a href="#featured">DEMOS</a>
        <div class="h-4 w-px bg-gray-400" />
        <a href="#featured">FEATURED WORK</a>
        <div class="h-4 w-px bg-gray-400" />
        <a href="#about">ABOUT MIKEGORAL</a>
        <div>
          <a href="#book" class="bg-[#12b4de] font-medium px-4 py-1"
            >BOOK MIKE</a
          >
        </div>
      </nav>

      <!-- main navigation mobile -->
      {#if mobileNav}
        <nav class="relative flex flex-col md:hidden space-y-6 py-6 pl-6 bg-gray-200 z-20 shadow-md">
          <a href="#featured">DEMOS</a>
          
          <a href="#featured">FEATURED WORK</a>
        
          <a href="#about">ABOUT MIKEGORAL</a>
          <div>
            <a href="#book" class="bg-[#12b4de] font-medium px-4 py-1"
              >BOOK MIKE</a
            >
          </div>
        </nav>
      {/if}

    </div>
  </section>

  <!-- Featured work section -->
  <section id="featured" class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]">
    <div
      class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-10 lg:pt-[9rem] pb-20"
    >
      <!-- video full view + filter options -->
      <div class="flex flex-col lg:flex-row lg:justify-between space-x-0 space-y-6 lg:space-x-10 lg:space-y-0">
        <div class="space-y-2">
          <h1 class="text-3xl text-[#12b4de] font-bold">FEATURED</h1>
          <h1 class="text-5xl text-[#202427] font-bold pb-4">WORK</h1>
          <div class="h-1 w-10 bg-gray-800 " />
          <div class="pt-6">
            <div class="flex flex-row flex-wrap space-x-3 lg:space-x-0 space-y-3 lg:flex-col text-lg cursor-pointer items-center lg:items-start">
              <div
                class:selected="{viewAll === true}"
                class="hover:text-[#12b4de] hover:font-medium mt-3 lg:mt-0"
                on:click={() => {
                   viewAll = true
                   title = ''
                   getAllPlaylistsEvent();
                }}
              >
                View All
              </div>
              <div class="h-4 w-[2px] bg-gray-500 lg:hidden" />
              {#each ytPlaylist as listItem}
                <div
                  class:selected="{listItem.playlist_title == title}"
                  class="hover:text-[#12b4de] hover:font-medium"
                  on:click={() => {
                    title = listItem.playlist_title
                    getYtVideos(listItem.youtube_playlist.url);
                  }}
                >
                  {listItem.playlist_title}
                </div>
                <div class="h-4 w-[2px] bg-gray-500 lg:hidden" />
              {/each}
              </div>
          </div>
        </div>
        <div class="youtube">
          {#if !videoId}
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/{ytListitems[0].contentDetails.videoId}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          {:else}
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/{videoId}?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          {/if}
        </div>
      </div>

      <!-- video thumbnail carousel -->
      <div class="flex relative items-center gap-5">
        <svg on:mousedown="{()=>{scroRight()}}"
          class="absolute -left-14 w-8 h-8 hidden lg:block cursor-pointer"
          fill="none"
          stroke="gray"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          /></svg
        >
        <div bind:this={box}
          class="box mt-8 flex flex-row justify-between overflow-x-scroll pb-2"
        >
          <!-- thumbnail lopp -->
          {#if viewAll}
              {#each AllPlayListItems as ytItem}
              <div class="flex relative flex-shrink-0 cursor-pointer px-3">
                <div
                  on:click={() => {
                    updateYtVideo(ytItem.videoId);
                  }}
                  class="absolute inset-0 opacity-10"
                />
                <iframe
                  class="w-[11rem] h-[7rem] md:w-[13rem] md:h-[8rem] 2xl:w-[15rem] 2xl:h-[8.438rem]"
                  src="https://www.youtube.com/embed/{ytItem.videoId}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            {/each}
            {:else}
              {#await promise}
              <h1>loading ..</h1>
                {:then ytList}
                  {#each ytList.items as { contentDetails }}
                    <div class="flex relative flex-shrink-0 cursor-pointer px-3">
                      <div
                        on:click={() => {
                          updateYtVideo(contentDetails.videoId);
                        }}
                        class="absolute inset-0 opacity-10"
                      />
                      <iframe
                        class="w-[11rem] h-[7rem] md:w-[13rem] md:h-[8rem] 2xl:w-[15rem] 2xl:h-[8.438rem]"
                        src="https://www.youtube.com/embed/{contentDetails.videoId}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                {/each}
              {:catch error}
                <p style="color: red">{error.message}</p>
              {/await}
          {/if}
        </div>
        <svg on:mousedown="{()=>{scroLeft()}}"
          class="absolute -right-14 w-8 h-8 hidden lg:block cursor-pointer"
          fill="none"
          stroke="gray"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          /></svg
        >
      </div>
    </div>
  </section>

  <!-- About section -->
  <section id="about" class="max-w-full mx-8 lg:mx-14 xl:mx-32 mt-[3.5rem] xl:mt-[7rem] ">
    <div class="flex flex-col">
      <div
        class="flex flex-col-reverse md:flex-row gap-[4rem] 2xl:gap-[8rem] items-center"
      >
        <img
          class="w-full md:w-1/2 lg:w-full"
          src={document.data.about_image.url}
          alt="3"
          border="0"
        />
        <div class="flex flex-col gap-8 items-end">
          <div class="flex flex-col gap-2 text-right">
            <h1 class="text-3xl text-[#12b4de] font-bold">ABOUT</h1>
            <h1 class="text-5xl text-[#202427] font-bold pb-4">MIKE GORAL</h1>
            <div class="flex justify-end">
              <div class="h-1 w-10 bg-gray-800" />
            </div>
          </div>
          <div class="w-full xl:w-10/12">
            <p class="text-right leading-loose">
              {@html PrismicDom.RichText.asHtml(document.data.content)}
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row gap-4 md:gap-[4rem] 2xl:gap-[8rem] items-center mt-8 md:mt-0"
      >
        <div class="w-full xl:w-10/12">
          <p class="leading-loose">
            {@html PrismicDom.RichText.asHtml(
              document.data.about_description_2nd_part
            )}
          </p>
        </div>

        <img
          class="w-full md:w-1/2 lg:w-full"
          src={document.data.about_2nd_image.url}
          alt="sound-wave-mike-goral"
          border="0"
        />
      </div>
    </div>
  </section>

  <!-- Book mike goral section -->
  <section class="max-w-full mx-3 lg:mx-14 xl:mx-32 bg-[#e9e9e9]">
    <div
      class="flex flex-col justify-center mx-5 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] pt-32 pb-20"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl text-[#12b4de] font-bold">BOOK</h1>
        <h1 class="text-5xl text-[#202427] font-bold pb-4">MIKE GORAL</h1>
        <div class="h-1 w-10 bg-gray-800" />
      </div>
      <div
        class="flex flex-col md:flex-row mt-[2rem] space-y-10 md:space-x-[4rem] lg:space-x-[8rem]"
      >
      {#each document.data.booking_details as bookingDetails}
      <div class="flex flex-col">
        <div>
          <h1 class="font-bold text-[#12b4de]">{bookingDetails.location_title[0].text}</h1>
          <div class="mt-3 space-y-1">
            <p class=" w-[12rem]">
              {bookingDetails.address}
            </p>
          </div>
        </div>
        <div class="mt-8 space-y-2">
          {@html PrismicDom.RichText.asHtml(bookingDetails.contacts)}
        </div>
      </div>
      {/each}

      </div>
    </div>
  </section>

  <!-- Contact mike form -->
  <footer
    id="book"
    class="max-w-full mx-3 lg:mx-14 xl:mx-32 border bg-cover bg-center"
    style="background-image: url('https://i.ibb.co/ZctjkQB/bg-footer.jpg');"
  >
  {#if !data}
  <div class="flex flex-col justify-center items-center space-y-8 mx-2 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] py-16">
    <h1 class="text-2xl font-bold text-white">CONTACT MIKE DIRECTLY</h1>
    <div class="flex flex-col space-y-4 w-full md:w-[40rem] items-center">
      <form class="flex flex-col items-center" on:submit|preventDefault={submitForm} action="">
        <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full">
          <input
            bind:value={name}
            class=" p-3 border w-full bg-[#ffffff00] text-white"
            type="text"
            placeholder="Name"
          />
          <input
            bind:value={fromEmail}
            class=" p-3 border w-full bg-[#ffffff00] text-white"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          bind:value={message}
          class="p-2 w-full border bg-[#ffffff00] text-white my-5"
          name="description"
          id="emailBody"
          cols="10"
          rows="5"
          placeholder="Type your message"
        />
        <input
          class="bg-[#12b4de] w-[12rem] py-2 text-white cursor-pointer font-medium hover:bg-[#14a7cc] bg-opacity-90 mt-6"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  </div>
  {:else}
  <div class="flex flex-col justify-center items-center gap-8 mx-2 lg:mx-[2rem] xl:mx-[8rem] 2xl:mx-[16rem] py-[14rem]">
    <div class="bg-green-400 bg-opacity-30 px-2">
      <p class="text-gray-200">Thanks!, your message has been successfully sent -- I'll get back to you as soon as I can</p>
    </div>
  </div>
  {/if}
   
  </footer>
  <!-- Copy right and social media links -->
  <footer
    class="max-w-full mx-3 lg:mx-14 xl:mx-32 flex justify-between items-center mt-3 pb-10"
  >
    <h5 class=" underline text-gray-400 text-sm">
      ©mikegoral.com All rights reserved
    </h5>
    <div class="flex items-center space-x-3">
      <a
        href={document.data.instagram_link.url}
        class="bg-[#12b4de] w-10 h-10 rounded-full flex items-center justify-center"
        ><i class="gg-instagram text-white" /></a
      >
      <a
        href={document.data.linkedin__link.url}
        class="bg-[#12b4de] w-10 h-10 rounded-full flex items-center justify-center"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          ><path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
          /></svg
        ></a
      >
    </div>
  </footer>
</div>

<style>
  @import url("https://css.gg/instagram.css");
  @import url('https://css.gg/close.css');
  @import url('https://css.gg/menu.css');
  .youtube {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 50.25%; /* 16:9 Aspect Ratio */
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
  .selected{
    color:#12b4de;
    font-weight: 600;
  }
  ::placeholder {
    color: #e0e0e0;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #e0e0e0;
  }
  .box{
    scroll-behavior: smooth;
  }

</style>
