import { defineComponent, h } from 'vue';

const ChevronRightLeftStaggeredSquare = defineComponent({
  name: 'ChevronRightLeftStaggeredSquare',
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
          h('path', {"d":"M10 11L12 9L10 7"}),
          h('path', {"d":"M14 13L12 15L14 17"}),
          h('path', {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z"})
        ]
      );
  }
});

export default ChevronRightLeftStaggeredSquare;
export { ChevronRightLeftStaggeredSquare };
