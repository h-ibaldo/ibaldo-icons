import { defineComponent, h } from 'vue';

const SquaresIntersect = defineComponent({
  name: 'SquaresIntersect',
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
          h('path', {"d":"M4 16C2.895 16 2 15.105 2 14"}),
          h('path', {"d":"M14 2C15.105 2 16 2.895 16 4"}),
          h('path', {"d":"M2 4C2 2.895 2.895 2 4 2"}),
          h('path', {"d":"M8 2L10 2"}),
          h('path', {"d":"M2 10L2 8"}),
          h('path', {"d":"M10 22C8.895 22 8 21.105 8 20"}),
          h('path', {"d":"M20 8C21.105 8 22 8.895 22 10"}),
          h('path', {"d":"M22 20C22 21.105 21.105 22 20 22"}),
          h('path', {"d":"M16 22L14 22"}),
          h('path', {"d":"M22 16L22 14"}),
          h('path', {"d":"M10 8L16 8L16 14C16 15.105 15.105 16 14 16L8 16L8 10C8 8.895 8.895 8 10 8Z"})
        ]
      );
  }
});

export default SquaresIntersect;
export { SquaresIntersect };
