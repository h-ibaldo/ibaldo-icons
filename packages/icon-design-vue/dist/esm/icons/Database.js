import { defineComponent, h } from 'vue';

const Database = defineComponent({
  name: 'Database',
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
          h('path', {"d":"M4 7C4 4.789 7.582 3 12 3C16.418 3 20 4.789 20 7C20 9.211 16.418 11 12 11C7.582 11 4 9.211 4 7Z"}),
          h('path', {"d":"M20 12C20 14.211 16.418 16 12 16C7.582 16 4 14.211 4 12"}),
          h('path', {"d":"M20 17C20 19.211 16.418 21 12 21C7.582 21 4 19.211 4 17"}),
          h('path', {"d":"M20 7L20 17"}),
          h('path', {"d":"M4 17L4 7"})
        ]
      );
  }
});

export default Database;
export { Database };
