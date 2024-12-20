<template>
  <div>
    <BlogBanner></BlogBanner>
    <h1>ULTIMOS POSTS</h1>
    <div class="card-container">
      <Card
        v-for="post in posts"
        :title="post.title"
        :previewMsg="post.body"
      ></Card>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga atque
      distinctio illum porro aspernatur, ut quae impedit. Iste soluta
      consectetur id maxime culpa veritatis sint nostrum consequuntur quaerat
      expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Possimus quaerat non at aliquid qui perferendis facilis corporis? Fuga
      voluptates cupiditate quae facilis molestias molestiae, excepturi rerum
      explicabo labore enim quod. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Unde ducimus nemo exercitationem est deserunt ad
      incidunt autem quae odio perferendis sequi, velit explicabo ipsa, eos
      voluptates ratione sapiente id architecto.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
      laudantium assumenda eveniet deleniti, velit cupiditate quidem ipsum ut
      consequatur voluptate voluptas cumque accusamus recusandae. Est officiis
      facere commodi distinctio quisquam.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam
      officiis amet dolorem distinctio alias maiores, doloribus recusandae
      excepturi consequuntur repellendus deserunt dolorum veniam facere sint sit
      praesentium qui totam.
    </p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
    quisquam debitis amet error laudantium. Labore nemo, corrupti accusamus
    nobis quae, voluptas, illum unde vitae iure eligendi sit omnis veniam.
    <p>TESTE STESDASDADASDASD</p>
  </div>
</template>
<script>
import BlogBanner from "../components/BlogBanner.vue";
import Card from "../components/Card.vue";

export default {
  components: {
    BlogBanner,
    Card,
  },
  data() {
    return { posts: [] };
  },
  async mounted() {
    let allPosts = await this.getPosts();
    this.setPosts(allPosts);
  },
  methods: {
    getPosts() {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    },
    setPosts(posts) {
      if (posts.length > 9) {
        this.posts = posts.slice(0, 9);
        return;
      }
      this.posts = posts;
    },
  },
};
</script>
<style>
.card-container {
  /* background-color: red; */
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
  /* align-items: center; */
}
</style>
