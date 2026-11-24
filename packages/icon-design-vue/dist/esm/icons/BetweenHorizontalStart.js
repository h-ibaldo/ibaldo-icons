import { defineComponent, h } from 'vue';

const BetweenHorizontalStart = defineComponent({
  name: 'BetweenHorizontalStart',
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
          h('path', {"d":"M3 8L7.242 12.242L3 16.484"}),
          h('path', {"d":"M11 2L21 2L21 10L11 10Z"}),
          h('path', {"d":"M11 14L21 14L21 22L11 22Z"})
        ]
      );
  }
});

export default BetweenHorizontalStart;
export { BetweenHorizontalStart };
