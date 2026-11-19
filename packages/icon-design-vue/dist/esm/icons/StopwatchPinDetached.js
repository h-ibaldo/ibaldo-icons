import { defineComponent, h } from 'vue';

const StopwatchPinDetached = defineComponent({
  name: 'StopwatchPinDetached',
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
          h('path', {"d":"M11 2L15 2"}),
          h('path', {"d":"M20 5L22 7"}),
          h('path', {"d":"M6 16L6 16"}),
          h('path', {"d":"M6 12C8.211 12 10 13.789 10 16C10 19 6 22 6 22C6 22 2 19 2 16C2 13.789 3.789 12 6 12"}),
          h('path', {"d":"M8.457 19.582C9.746 20.473 11.309 21 13 21C17.418 21 21 17.418 21 13C21 8.582 17.418 5 13 5C8.879 5 5.484 8.117 5.051 12.125"}),
          h('path', {"d":"M13 9L13 13"})
        ]
      );
  }
});

export default StopwatchPinDetached;
export { StopwatchPinDetached };
