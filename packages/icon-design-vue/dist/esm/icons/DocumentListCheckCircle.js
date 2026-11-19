import { defineComponent, h } from 'vue';

const DocumentListCheckCircle = defineComponent({
  name: 'DocumentListCheckCircle',
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
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M15.5 17L16.5 18L18.5 16"}),
          h('path', {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 9"}),
          h('path', {"d":"M6 7L6 7"}),
          h('path', {"d":"M16 7L9 7"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M17 12L9 12"}),
          h('path', {"d":"M6 17L6 17"}),
          h('path', {"d":"M12 17L9 17"})
        ]
      );
  }
});

export default DocumentListCheckCircle;
export { DocumentListCheckCircle };
