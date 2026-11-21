import { defineComponent, h } from 'vue';

const MonitorArrowUp = defineComponent({
  name: 'MonitorArrowUp',
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
          h('path', {"d":"M2 4L22 4L22 18L2 18Z"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M12 14L12 8"}),
          h('path', {"d":"M9 11L12 8L15 11"})
        ]
      );
  }
});

export default MonitorArrowUp;
export { MonitorArrowUp };
