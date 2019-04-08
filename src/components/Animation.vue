<template>
   <b-row>
      <div class="col">
        <button class="btn btn-primary" @click="show = !show">Toggle Menu</button>

        <button class="btn btn-primary" @click="toggleMenu">Toggle another Menu</button>

        <button class="btn btn-primary" @click="changeShape">Switch Shape</button>
        <hr>
        <nav>
          <ul>
            <li>
              <transition name="menu-item1" mode="out-in">
                <a class="menu-item" key="item1" v-if="show">Blog Post</a>
                <!-- <a class="menu-item" key="intro" v-else>Menu ninja</a>  -->
              </transition>
            </li>

            <li>
              <transition name="menu-item2">
                <a class="menu-item" key="item2" v-if="show">Article</a>
              </transition>
            </li>

            <li>
              <transition name="menu-item3">
                <a class="menu-item" key="item3" v-if="show">Contact Us</a>
              </transition>
            </li>
          </ul>
        </nav>
                <nav>
          <ul>
            <transition-group name="menu" appear>
              <li :key="index" v-for="(item, index) in visibleMenuItems">
                <a class="menu-item">{{item}}</a>
              </li>
            </transition-group>
          </ul>
        </nav>
        <transition name="shape" mode="out-in">
          <component :is="shape"></component>
        </transition>

      </div>
    </b-row>
    </template>

<script>
import Square from "./Square.vue";
import Circle from "./Circle.vue";
export default{
    data(){
        return{
            show: false,
            shape: "appSquare",
            menuItems: ["Blog Post", "Article", "Contact"],
            visibleMenuItems: [],
        };
    },
    components: {
        appSquare: Square,
        appCircle: Circle
    },
    methods:{
        changeShape() {
            if (this.shape === "appSquare") {
                this.shape = "appCircle";
            } else {
                this.shape = "appSquare";
            }
        },
        
        toggleMenu() {
            if (this.visibleMenuItems.length < 1) {
                this.menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        this.visibleMenuItems.push(item);
                    }, 250 * (index + 1));
                });
            } else {
                this.menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        this.visibleMenuItems.splice(-1, 1);
                    }, 250 * (index + 1));
                });
            }
        },
    }
};
</script>

    <style>
    .menu-item {
  display: inline-block;
}

.menu-item1-enter-active {
  animation: pulse 0.5s;
}
.menu-item1-leave-active {
  animation: fade-out 1s;
}

.menu-item2-enter-active {
  animation: pulse 0.75s;
}
.menu-item2-leave-active {
  animation: fade-out 1s;
}
.menu-item3-enter-active {
  animation: pulse 1s;
}
.menu-item3-leave-active {
  animation: fade-out 1s;
}
.shape-enter-active,
.shape-leave-active {
  transition: opacity 1s ease;
}

.shape-enter,
.shape-leave-to {
  opacity: 0;
}
#app {
  opacity: 0;
  transition: opacity 2s;
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.75s ease;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: rotate(45deg) translateY(-30px);
}
    </style>