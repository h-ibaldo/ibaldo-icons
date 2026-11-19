import { defineComponent, h } from 'vue';

const DocumentList = defineComponent({
  name: 'DocumentList',
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
          h('path', {"d":"M19 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 20C21 21.105 20.105 22 19 22Z"}),
          h('path', {"d":"M7 7L7 7"}),
          h('path', {"d":"M17 7L10 7"}),
          h('path', {"d":"M7 12L7 12"}),
          h('path', {"d":"M17 12L10 12"}),
          h('path', {"d":"M7 17L7 17"}),
          h('path', {"d":"M17 17L10 17"})
        ]
      );
  }
});

export default DocumentList;
export { DocumentList };
