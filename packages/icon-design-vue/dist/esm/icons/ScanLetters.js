import { defineComponent, h } from 'vue';

const ScanLetters = defineComponent({
  name: 'ScanLetters',
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
          h('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22"}),
          h('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2"}),
          h('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17"}),
          h('path', {"d":"M8 10L8 8L16 8L16 10"}),
          h('path', {"d":"M12 8L12 16"}),
          h('path', {"d":"M14 16L10 16"})
        ]
      );
  }
});

export default ScanLetters;
export { ScanLetters };
