import { defineComponent, h } from 'vue';

const MonitorDot = defineComponent({
  name: 'MonitorDot',
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
          h('path', {"d":"M22 11L22 18L2 18L2 4L14 4"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M17 5.5C17 4.121 18.121 3 19.5 3C20.879 3 22 4.121 22 5.5C22 6.879 20.879 8 19.5 8C18.121 8 17 6.879 17 5.5Z"})
        ]
      );
  }
});

export default MonitorDot;
export { MonitorDot };
