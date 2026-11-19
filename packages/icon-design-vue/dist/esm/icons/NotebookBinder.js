import { defineComponent, h } from 'vue';

const NotebookBinder = defineComponent({
  name: 'NotebookBinder',
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
          h('path', {"d":"M6 12L6 10"}),
          h('path', {"d":"M6 17L6 15"}),
          h('path', {"d":"M6 7L6 4C6 3.449 6.449 3 7 3L19 3C19.551 3 20 3.449 20 4L20 20C20 20.551 19.551 21 19 21L7 21C6.449 21 6 20.551 6 20"}),
          h('path', {"d":"M4 7L8 7"}),
          h('path', {"d":"M4 12L8 12"}),
          h('path', {"d":"M4 17L8 17"})
        ]
      );
  }
});

export default NotebookBinder;
export { NotebookBinder };
