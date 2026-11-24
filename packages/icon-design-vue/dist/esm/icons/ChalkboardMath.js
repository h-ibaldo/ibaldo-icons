import { defineComponent, h } from 'vue';

const ChalkboardMath = defineComponent({
  name: 'ChalkboardMath',
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
          h('path', {"d":"M3 19L3 5L21 5L21 19"}),
          h('path', {"d":"M22 19L2 19"}),
          h('path', {"d":"M10 12L14 12"}),
          h('path', {"d":"M12 10L12 14"}),
          h('path', {"d":"M17 14L17 10"}),
          h('path', {"d":"M7 14L7 10"})
        ]
      );
  }
});

export default ChalkboardMath;
export { ChalkboardMath };
