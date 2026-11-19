import { defineComponent, h } from 'vue';

const ArrowCornerUpLeft = defineComponent({
  name: 'ArrowCornerUpLeft',
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
          h('path', {"d":"M7 12L3 8L7 4"}),
          h('path', {"d":"M3 8L13 8C17.418 8 21 11.582 21 16L21 20"})
        ]
      );
  }
});

export default ArrowCornerUpLeft;
export { ArrowCornerUpLeft };
