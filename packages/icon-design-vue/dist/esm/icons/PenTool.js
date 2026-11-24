import { defineComponent, h } from 'vue';

const PenTool = defineComponent({
  name: 'PenTool',
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
          h('path', {"d":"M2 2L12 12"}),
          h('path', {"d":"M2 2L5.543 15.293C5.824 16.348 6.656 17.164 7.715 17.43L14 19L19 14L17.43 7.715C17.164 6.656 16.344 5.824 15.293 5.543Z"}),
          h('path', {"d":"M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z"}),
          h('path', {"d":"M16 21L21 16L22 17L17 22Z"})
        ]
      );
  }
});

export default PenTool;
export { PenTool };
