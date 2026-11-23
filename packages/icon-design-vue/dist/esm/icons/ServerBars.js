import { defineComponent, h } from 'vue';

const ServerBars = defineComponent({
  name: 'ServerBars',
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
          h('path', {"d":"M3 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z"}),
          h('path', {"d":"M10 8L10 16"}),
          h('path', {"d":"M14 8L14 16"}),
          h('path', {"d":"M18 8L18 16"}),
          h('path', {"d":"M6 16L6 16"}),
          h('path', {"d":"M6 13L6 13"})
        ]
      );
  }
});

export default ServerBars;
export { ServerBars };
