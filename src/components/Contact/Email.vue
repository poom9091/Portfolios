<template>
    <div class=" bg-white py-10 lg:mr-24  w-full lg:w-1/2 flex flex-wrap content-center justify-center  ">
        <form class=" flex flex-col space-y-4 w-9/12 py-10 px-10 " @submit.prevent="sendEmail">
            <label class=" text-lg font-bold text-darkblue-cos">Your Name</label>
            <input class=" border-2 border-yellow-500 rounded-md p-2  " placeholder="Name" type="text" name="user_name">
            <label class=" text-lg font-bold text-darkblue-cos" >Email</label>
            <input class=" border-2 border-yellow-500 rounded-md p-2 " placeholder="Email" type="email" name="user_email">
            <label class=" text-lg font-bold text-darkblue-cos py-2" >Message</label>
            <textarea class=" border-2 border-yellow-500 rounded-md p-2 " name="message" placeholder="Message" ></textarea>
            <input class="  bg-darkblue-cos rounded-lg  text-white-cos text-2xl py-3 font-bold uppercase w-10/12 mx-auto hover:bg-yellow-cos"  type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_16b7chr','template_4an0qci', e.target, 'user_XS5pfVhNBLQ9HDOGlv1Ow')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style>

</style>