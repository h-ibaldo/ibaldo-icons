import { defineComponent, h } from 'vue';

const CookieCheck = defineComponent({
  name: 'CookieCheck',
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
          h('path', {"d":"M20.5 12C15.805 12 12 8.195 12 3.5C12 2.988 12.055 2.492 12.141 2.008C12.094 2.008 12.047 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.953 21.992 11.906 21.992 11.859C21.508 11.945 21.012 12 20.5 12Z"}),
          h('path', {"d":"M17 4L19 6L22 3"}),
          h('path', {"d":"M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z"}),
          h('path', {"d":"M12 17C12 17.551 11.555 18 11 18C10.445 18 10 17.551 10 17C10 16.449 10.445 16 11 16C11.555 16 12 16.449 12 17Z"}),
          h('path', {"d":"M11 12L11 12"}),
          h('path', {"d":"M7 14L7 14"}),
          h('path', {"d":"M16 16L16 16"})
        ]
      );
  }
});

export default CookieCheck;
export { CookieCheck };
