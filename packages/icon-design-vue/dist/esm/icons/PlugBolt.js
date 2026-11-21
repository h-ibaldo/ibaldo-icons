import { defineComponent, h } from 'vue';

const PlugBolt = defineComponent({
  name: 'PlugBolt',
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
          h('path', {"d":"M3 9L15 9L15 13C15 15.762 12.762 18 10 18L8 18C5.238 18 3 15.762 3 13Z"}),
          h('path', {"d":"M9 18L9 22"}),
          h('path', {"d":"M12 4L12 9"}),
          h('path', {"d":"M6 4L6 9"}),
          h('path', {"d":"M22 2L18 6L22 6L18 11"})
        ]
      );
  }
});

export default PlugBolt;
export { PlugBolt };
