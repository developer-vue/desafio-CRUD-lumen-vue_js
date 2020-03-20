import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

const toastSuccess = message => {
  Vue.$toast.open({
    type: 'success',
    position: 'top-right',
    message,
    duration: 3000
  });
};

const toastError = message => {
  Vue.$toast.open({
    type: 'error',
    position: 'top-right',
    message,
    duration: 3000
  });
};

const toastInfo = message => {
  Vue.$toast.open({
    type: 'info',
    position: 'top-right',
    message,
    duration: 3000
  });
};

export { toastSuccess, toastError, toastInfo };
