import { defineComponent, h } from 'vue';

const CropMarksTwoLines = defineComponent({
  name: 'CropMarksTwoLines',
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
          h('path', {"d":"M15 18L9 18C7.895 18 7 17.105 7 16L7 8C7 6.895 7.895 6 9 6L15 6C16.105 6 17 6.895 17 8L17 16C17 17.105 16.105 18 15 18Z"}),
          h('path', {"d":"M11 10L13 10"}),
          h('path', {"d":"M11 14L13 14"}),
          h('path', {"d":"M5 2L5 5L2 5"}),
          h('path', {"d":"M22 5L19 5L19 2"}),
          h('path', {"d":"M19 22L19 19L22 19"}),
          h('path', {"d":"M2 19L5 19L5 22"})
        ]
      );
  }
});

export default CropMarksTwoLines;
export { CropMarksTwoLines };
