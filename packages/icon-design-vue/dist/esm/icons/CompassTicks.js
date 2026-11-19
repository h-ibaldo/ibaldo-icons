import { defineComponent, h } from 'vue';

const CompassTicks = defineComponent({
  name: 'CompassTicks',
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
          h('path', {"d":"M16 8L10 10L8 16L14 14Z"}),
          h('path', {"d":"M12 2L12 4"}),
          h('path', {"d":"M12 20L12 22"}),
          h('path', {"d":"M22 12L20 12"}),
          h('path', {"d":"M4 12L2 12"})
        ]
      );
  }
});

export default CompassTicks;
export { CompassTicks };
