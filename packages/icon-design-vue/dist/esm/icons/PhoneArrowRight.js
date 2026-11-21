import { defineComponent, h } from 'vue';

const PhoneArrowRight = defineComponent({
  name: 'PhoneArrowRight',
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
          h('path', {"d":"M8.043 17.867L6.141 15.965C4.398 14.223 3.086 12.098 2.309 9.762C1.754 8.098 1.953 6.277 2.855 4.777L3.938 2.973C4.301 2.367 4.949 2 5.652 2L6.535 2C7.207 2 7.828 2.336 8.199 2.891L10.465 6.285C11.133 7.289 10.77 8.648 9.695 9.184L7.605 10.23L8.172 11.363C9.141 13.297 10.711 14.867 12.645 15.836L13.777 16.402L14.824 14.313C15.359 13.238 16.719 12.875 17.723 13.543L21.117 15.809C21.672 16.18 22.008 16.801 22.008 17.473L22.008 18.355C22.008 19.059 21.641 19.707 21.035 20.07L19.23 21.152C17.73 22.055 15.91 22.254 14.246 21.699C11.91 20.922 9.785 19.609 8.043 17.867Z"}),
          h('path', {"d":"M14 6L21.441 6"}),
          h('path', {"d":"M18.441 9L21.441 6L18.441 3"})
        ]
      );
  }
});

export default PhoneArrowRight;
export { PhoneArrowRight };
