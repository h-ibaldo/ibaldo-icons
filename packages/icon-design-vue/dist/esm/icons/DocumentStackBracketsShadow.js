import { defineComponent, h } from 'vue';

const DocumentStackBracketsShadow = defineComponent({
  name: 'DocumentStackBracketsShadow',
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
          h('path', {"d":"M20 12L20 8C20 6.895 19.105 6 18 6L8 6C6.895 6 6 6.895 6 8L6 20C6 21.105 6.895 22 8 22"}),
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2"}),
          h('path', {"d":"M14 16L11 19L14 22"}),
          h('path', {"d":"M19 16L22 19L19 22"})
        ]
      );
  }
});

export default DocumentStackBracketsShadow;
export { DocumentStackBracketsShadow };
