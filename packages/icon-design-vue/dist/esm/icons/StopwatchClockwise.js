import { defineComponent, h } from 'vue';

const StopwatchClockwise = defineComponent({
  name: 'StopwatchClockwise',
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
          h('path', {"d":"M5 5L3 7"}),
          h('path', {"d":"M19 5L21 7"}),
          h('path', {"d":"M10 3L14 3"}),
          h('path', {"d":"M12 3L12 6"}),
          h('path', {"d":"M4 21L4 17L8 17"}),
          h('path', {"d":"M5.07 18C6.453 20.391 9.039 22 12 22C16.418 22 20 18.418 20 14C20 9.582 16.418 6 12 6C7.922 6 4.563 9.055 4.07 13"}),
          h('path', {"d":"M12 10L12 14"})
        ]
      );
  }
});

export default StopwatchClockwise;
export { StopwatchClockwise };
