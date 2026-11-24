import { defineComponent, h } from 'vue';

const ArrowCornerDownLeft = defineComponent({
  name: 'ArrowCornerDownLeft',
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
          h('path', {"d":"M7 12L3 16L7 20"}),
          h('path', {"d":"M3 16L13 16C17.418 16 21 12.418 21 8L21 4"})
        ]
      );
  }
});

export default ArrowCornerDownLeft;
export { ArrowCornerDownLeft };
