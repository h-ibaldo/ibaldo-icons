import { defineComponent, h } from 'vue';

const EarRingRight = defineComponent({
  name: 'EarRingRight',
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
          h('path', {"d":"M10.859 9L10.859 8.5C10.859 7.119 9.739 6 8.359 6L8.359 6C6.978 6 5.859 7.119 5.859 8.5L5.859 12"}),
          h('path', {"d":"M2 19C2.446 20.722 3.997 22 5.859 22C8.068 22 9.859 20.209 9.859 18C9.859 16.719 10.367 15.491 11.273 14.586L13.091 12.768C14.223 11.636 14.859 10.101 14.859 8.5C14.859 4.91 11.948 2 8.359 2C5.286 2 2.718 4.135 2.039 7"}),
          h('path', {"d":"M4.859 12L5.359 12C6.187 12 6.859 12.672 6.859 13.5L6.859 13.5C6.859 13.825 6.753 14.14 6.559 14.4L5.359 16"}),
          h('path', {"d":"M22 18.221C21.39 17.672 21 16.885 21 16C21 15.115 21.39 14.328 22 13.779"}),
          h('path', {"d":"M20 21.725C18.191 20.461 17 18.375 17 16C17 13.625 18.191 11.539 20 10.275"})
        ]
      );
  }
});

export default EarRingRight;
export { EarRingRight };
