import { defineComponent, h } from 'vue';

const RectanglePairDashed = defineComponent({
  name: 'RectanglePairDashed',
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
          h('path', {"d":"M16 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2L16 2C14.895 2 14 2.895 14 4L14 20C14 21.105 14.895 22 16 22Z"}),
          h('path', {"d":"M10 2L8 2"}),
          h('path', {"d":"M8 22L10 22"}),
          h('path', {"d":"M4 2C2.895 2 2 2.895 2 4"}),
          h('path', {"d":"M2 8L2 10"}),
          h('path', {"d":"M2 14L2 16"}),
          h('path', {"d":"M2 20C2 21.105 2.895 22 4 22"})
        ]
      );
  }
});

export default RectanglePairDashed;
export { RectanglePairDashed };
