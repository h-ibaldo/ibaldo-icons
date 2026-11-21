import { defineComponent, h } from 'vue';

const Plug = defineComponent({
  name: 'Plug',
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
          h('path', {"d":"M6 8L18 8L18 12C18 14.762 15.762 17 13 17L11 17C8.238 17 6 14.762 6 12Z"}),
          h('path', {"d":"M12 17L12 21"}),
          h('path', {"d":"M15 3L15 8"}),
          h('path', {"d":"M9 3L9 8"})
        ]
      );
  }
});

export default Plug;
export { Plug };
