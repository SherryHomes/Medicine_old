import router from '@system.router';

export default {
    onclick:function () {
        router.push({
            uri: 'pages/add_medicine/add_medicine',
        });
    },
};