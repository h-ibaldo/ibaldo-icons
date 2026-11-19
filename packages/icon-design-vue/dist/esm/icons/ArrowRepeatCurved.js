import { defineComponent, h } from 'vue';

const ArrowRepeatCurved = defineComponent({
  name: 'ArrowRepeatCurved',
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
          h('path', {"d":"M5 21L3 19L5 17"}),
          h('path', {"d":"M21 5L12 5C7.027 5 3 9.027 3 14"}),
          h('path', {"d":"M19 3L21 5L19 7"}),
          h('path', {"d":"M3 19L12 19C16.973 19 21 14.973 21 10"})
        ]
      );
  }
});

export default ArrowRepeatCurved;
export { ArrowRepeatCurved };
