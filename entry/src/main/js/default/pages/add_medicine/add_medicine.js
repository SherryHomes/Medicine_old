import router from '@system.router';

export default {
    back: function () {
        router.back()
    },
    onclick:function () {
        router.push({
            uri: "pages/identify/identify"
        })
    },
    onclick2:function () {
        router.push({
            uri: "pages/manual/manual"
        })
    }
}
