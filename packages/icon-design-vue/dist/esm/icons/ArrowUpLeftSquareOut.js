import { defineComponent, h } from 'vue';

const ArrowUpLeftSquareOut = defineComponent({
  name: 'ArrowUpLeftSquareOut',
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
          h('path', {"d":"M9.004 2.98L3.004 2.98L3.004 8.98"}),
          h('path', {"d":"M11.004 10.98L3.004 2.98"}),
          h('path', {"d":"M13 6L19 6C20.105 6 21 6.895 21 8L21 19C21 20.105 20.105 21 19 21L8 21C6.895 21 6 20.105 6 19L6 13"})
        ]
      );
  }
});

export default ArrowUpLeftSquareOut;
export { ArrowUpLeftSquareOut };
