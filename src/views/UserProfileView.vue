<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @postAPost="postAPost" />
      </div>

      <div class="col-9">
        <UserProfilePosts :posts="posts" />

      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserProfilePosts from '@/components/UserProfilePosts.vue';
import { reactive } from 'vue';
import UserProfileWrite from '@/components/UserProfileWrite.vue';
import { useRoute } from 'vue-router';


export default {
  name: 'UserProfileView',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },

  setup() {
    const route = useRoute();
    const userId = route.params.userId;
    console.log(userId);

    const user = reactive({
      id: 1,
      username: "zhangjingkai",
      lastname: "Zhang",
      firstname: "Jingkai",
      followerCount: 0,
      isFollowed: false,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "123",
        },
        {
          id: 2,
          userId: 1,
          content: "1234",
        },
        {
          id: 3,
          userId: 1,
          content: "1232",
        },
      ]
    })

    const follow = () => {
      if (user.isFollowed) return;
      user.isFollowed = true;
      user.followerCount++;
    };

    const unfollow = () => {
      if (!user.isFollowed) return;
      user.isFollowed = false;
      user.followerCount--;
    }

    const postAPost = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      })
    }

    return {
      user,
      follow,
      unfollow,
      posts,
      postAPost,
    }
  }
}
</script>

<style scoped>

</style>