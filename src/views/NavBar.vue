<template>

<ul id="nav">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about-us">About Us</router-link></li>
    <li class="drpdwn">
        <router-link to="/product" class="drpbtn">Product</router-link>
        <div class="drpcontent boxshd">
            <router-link to="/product1">Product 1</router-link>
            <router-link to="/product2">Product 2</router-link>
            <router-link to="/product3">Product 3</router-link>
        </div>    
    </li>
    <li><router-link to="/exercise">Exercise</router-link></li>
    <li><router-link to="/contact-us">Contact Us</router-link></li>
</ul>

</template>

<script>

export default {
  
    name: 'NavBar'

}

</script>

<style scoped>

#nav {
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #3c3c3c;
    display: block;
}

li {
    float: left;
    width: 20%;
}

li a, .drpbtn {
    display: block;
    color: white;
    text-align: center;
    padding: 15px 20px;
    text-decoration: none;
}

li a:hover:not(.router-link-active), .drpdwn .drpbtn:hover:not(.router-link-active) {
    background-color: #787878;
}

.router-link-active {
    background-color: darkgreen;
}

li.drpdwn {
    display: block;
}

.drpcontent {
    position: absolute;
    display: none;
    background-color: #686868;
    min-width: 20%;
    z-index: 1;
}

.drpcontent a {
    color: white;
    padding: 15px 20px;
    text-decoration: none;
    text-align: center;
    display: block;
}

.drpcontent a:hover:not(.router-link-active) {
    background-color: #787878;
}

.drpdwn:hover .drpcontent {
    display: block;
}


</style>