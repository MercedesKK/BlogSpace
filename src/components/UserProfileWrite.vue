<template>
    <div class="card edit-field">
        <div class="card-body">
            <label for="edit-post" class="form-label">编辑帖子</label>
            <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
            <button @click="postAPost" type="button" class="btn btn-primary btn-sm">发帖</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: "UserProfileWrite",
    setup(props, context) {
        const store = useStore();
        let content = ref("");

        const postAPost = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "POST",
                data: {
                    content: content.value,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        context.emit('postAPost', content.value);
                        content.value = "";
                    }
                }
            })
        }

        return {
            content,
            postAPost,
        }
    }
}

</script>

<style scoped>
.edit-field {
    margin-top: 10px;
}

button {
    margin-top: 10px;
}
</style>