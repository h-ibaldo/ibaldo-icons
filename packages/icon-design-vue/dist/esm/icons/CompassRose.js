import { defineComponent, h } from 'vue';

const CompassRose = defineComponent({
  name: 'CompassRose',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M13.145 13.145L16 12L13.145 10.855L12 8L10.859 10.855L8 12L10.859 13.145L12 16Z"}),
          h('path', {"d":"M12 2L12 4"}),
          h('path', {"d":"M12 20L12 22"}),
          h('path', {"d":"M22 12L20 12"}),
          h('path', {"d":"M4 12L2 12"}),
          h('path', {"d":"M4.93 4.93L6.344 6.344"}),
          h('path', {"d":"M17.656 17.656L19.07 19.07"}),
          h('path', {"d":"M19.07 4.93L17.656 6.344"}),
          h('path', {"d":"M6.344 17.656L4.93 19.07"})
        ]
      );
  }
});

export default CompassRose;
export { CompassRose };
