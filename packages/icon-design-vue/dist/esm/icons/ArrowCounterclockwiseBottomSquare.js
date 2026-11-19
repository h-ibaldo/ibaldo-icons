import { defineComponent, h } from 'vue';

const ArrowCounterclockwiseBottomSquare = defineComponent({
  name: 'ArrowCounterclockwiseBottomSquare',
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
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"}),
          h('path', {"d":"M17 11L14 14C12.344 15.656 9.656 15.656 8 14C6.344 12.344 6.344 9.656 8 8L9 7"}),
          h('path', {"d":"M13 11L17 11L17 15"})
        ]
      );
  }
});

export default ArrowCounterclockwiseBottomSquare;
export { ArrowCounterclockwiseBottomSquare };
