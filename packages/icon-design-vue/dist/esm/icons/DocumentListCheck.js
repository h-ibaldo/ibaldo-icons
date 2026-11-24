import { defineComponent, h } from 'vue';

const DocumentListCheck = defineComponent({
  name: 'DocumentListCheck',
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
          h('path', {"d":"M15 19L17 21L21 16.5"}),
          h('path', {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 12"}),
          h('path', {"d":"M7 7L7 7"}),
          h('path', {"d":"M17 7L11 7"}),
          h('path', {"d":"M7 12L7 12"}),
          h('path', {"d":"M17 12L11 12"}),
          h('path', {"d":"M7 17L7 17"}),
          h('path', {"d":"M12 17L11 17"})
        ]
      );
  }
});

export default DocumentListCheck;
export { DocumentListCheck };
