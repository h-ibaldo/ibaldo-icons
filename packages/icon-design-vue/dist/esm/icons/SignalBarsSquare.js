import { defineComponent, h } from 'vue';

const SignalBarsSquare = defineComponent({
  name: 'SignalBarsSquare',
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
          h('path', {"d":"M6 16L6 14"}),
          h('path', {"d":"M10 16L10 12"}),
          h('path', {"d":"M14 16L14 10"}),
          h('path', {"d":"M18 16L18 8"}),
          h('path', {"d":"M19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20Z"})
        ]
      );
  }
});

export default SignalBarsSquare;
export { SignalBarsSquare };
