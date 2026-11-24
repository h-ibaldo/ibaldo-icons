import { defineComponent, h } from 'vue';

const ClockTicks = defineComponent({
  name: 'ClockTicks',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M12 8L12 12L16 12"}),
          h('path', {"d":"M12 4L12 2"}),
          h('path', {"d":"M12 22L12 20"}),
          h('path', {"d":"M20 12L22 12"}),
          h('path', {"d":"M2 12L4 12"}),
          h('path', {"d":"M17.656 6.344L19.07 4.93"}),
          h('path', {"d":"M4.93 19.07L6.344 17.656"}),
          h('path', {"d":"M17.656 17.656L19.07 19.07"}),
          h('path', {"d":"M4.93 4.93L6.344 6.344"})
        ]
      );
  }
});

export default ClockTicks;
export { ClockTicks };
