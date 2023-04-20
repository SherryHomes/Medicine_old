import router from '@system.router';

export default {
    back: function () {
        router.back()
    },
    onclick:function () {
        router.push({
            uri: "pages/lastinfo/lastinfo"
        })
    }
}