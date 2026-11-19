import { defineComponent, h } from 'vue';

const ArrowClockwiseBottomCircle = defineComponent({
  name: 'ArrowClockwiseBottomCircle',
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
          h('path', {"d":"M7 11L10 14C11.656 15.656 14.344 15.656 16 14C17.656 12.344 17.656 9.656 16 8L15 7"}),
          h('path', {"d":"M11 11L7 11L7 15"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

export default ArrowClockwiseBottomCircle;
export { ArrowClockwiseBottomCircle };
