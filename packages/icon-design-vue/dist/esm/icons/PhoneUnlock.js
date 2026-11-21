import { defineComponent, h } from 'vue';

const PhoneUnlock = defineComponent({
  name: 'PhoneUnlock',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('path', {"d":"M7.035 18.973L4.953 16.891C3.742 15.684 2.832 14.207 2.289 12.582C1.77 11.016 1.957 9.301 2.805 7.883L3.352 6.973C3.715 6.367 4.367 6 5.07 6L5.336 6C6.004 6 6.629 6.336 7 6.891L8.441 9.051C9.105 10.055 8.746 11.414 7.672 11.949L6.406 12.582L6.559 12.895C7.527 14.828 9.098 16.398 11.031 17.367L11.344 17.52L11.977 16.254C12.512 15.18 13.871 14.82 14.875 15.484L17.035 16.926C17.59 17.297 17.926 17.922 17.926 18.59L17.926 18.855C17.926 19.559 17.559 20.211 16.953 20.57L16.043 21.121C14.625 21.969 12.91 22.156 11.344 21.637C9.719 21.094 8.242 20.184 7.035 18.973Z"}),
          h('path', {"d":"M11.941 6L18.941 6L18.941 11L11.941 11Z"}),
          h('path', {"d":"M22 6L22 4C22 2.895 21.105 2 20 2L19 2C17.895 2 17 2.895 17 4L17 6"})
        ]
      );
  }
});

export default PhoneUnlock;
export { PhoneUnlock };
