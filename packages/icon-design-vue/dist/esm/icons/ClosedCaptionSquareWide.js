import { defineComponent, h } from 'vue';

const ClosedCaptionSquareWide = defineComponent({
  name: 'ClosedCaptionSquareWide',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9"}),
          h('path', {"d":"M17 15L16 15C14.344 15 13 13.656 13 12C13 10.344 14.344 9 16 9L17 9"})
        ]
      );
  }
});

export default ClosedCaptionSquareWide;
export { ClosedCaptionSquareWide };
