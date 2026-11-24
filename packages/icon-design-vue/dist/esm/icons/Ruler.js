import { defineComponent, h } from 'vue';

const Ruler = defineComponent({
  name: 'Ruler',
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
          h('path', {"d":"M3 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8Z"}),
          h('path', {"d":"M6 11L6 8"}),
          h('path', {"d":"M10 11L10 8"}),
          h('path', {"d":"M14 11L14 8"}),
          h('path', {"d":"M18 11L18 8"})
        ]
      );
  }
});

export default Ruler;
export { Ruler };
