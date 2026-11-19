import { defineComponent, h } from 'vue';

const Notebook = defineComponent({
  name: 'Notebook',
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
          h('path', {"d":"M18 21L8 21C6.895 21 6 20.105 6 19L6 5C6 3.895 6.895 3 8 3L18 3C19.105 3 20 3.895 20 5L20 19C20 20.105 19.105 21 18 21Z"}),
          h('path', {"d":"M4 7L8 7"}),
          h('path', {"d":"M4 12L8 12"}),
          h('path', {"d":"M4 17L8 17"})
        ]
      );
  }
});

export default Notebook;
export { Notebook };
