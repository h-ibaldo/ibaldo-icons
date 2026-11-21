import { defineComponent, h } from 'vue';

const Mobile = defineComponent({
  name: 'Mobile',
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
          h('path', {"d":"M16 22L8 22C6.895 22 6 21.105 6 20L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 20C18 21.105 17.105 22 16 22Z"}),
          h('path', {"d":"M6 18L18 18"}),
          h('path', {"d":"M6 6L18 6"})
        ]
      );
  }
});

export default Mobile;
export { Mobile };
