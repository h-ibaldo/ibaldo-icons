import { defineComponent, h } from 'vue';

const NotebookSharp = defineComponent({
  name: 'NotebookSharp',
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
          h('path', {"d":"M20 21L6 21L6 3L20 3Z"}),
          h('path', {"d":"M4 6L8 6"}),
          h('path', {"d":"M4 10L8 10"}),
          h('path', {"d":"M4 14L8 14"}),
          h('path', {"d":"M4 18L8 18"})
        ]
      );
  }
});

export default NotebookSharp;
export { NotebookSharp };
