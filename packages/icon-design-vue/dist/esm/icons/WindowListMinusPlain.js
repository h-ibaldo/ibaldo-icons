import { defineComponent, h } from 'vue';

const WindowListMinusPlain = defineComponent({
  name: 'WindowListMinusPlain',
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
          h('path', {"d":"M21 19L15 19"}),
          h('path', {"d":"M11 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 14"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M9 13L15 13"}),
          h('path', {"d":"M6 13L6 13"}),
          h('path', {"d":"M9 17L11 17"}),
          h('path', {"d":"M6 17L6 17"})
        ]
      );
  }
});

export default WindowListMinusPlain;
export { WindowListMinusPlain };
