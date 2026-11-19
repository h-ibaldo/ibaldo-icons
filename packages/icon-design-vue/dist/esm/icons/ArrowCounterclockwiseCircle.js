import { defineComponent, h } from 'vue';

const ArrowCounterclockwiseCircle = defineComponent({
  name: 'ArrowCounterclockwiseCircle',
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
          h('path', {"d":"M7 13L10 10C11.656 8.344 14.344 8.344 16 10C17.656 11.656 17.656 14.344 16 16L15 17"}),
          h('path', {"d":"M11 13L7 13L7 9"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

export default ArrowCounterclockwiseCircle;
export { ArrowCounterclockwiseCircle };
