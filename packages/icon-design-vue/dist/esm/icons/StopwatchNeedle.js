import { defineComponent, h } from 'vue';

const StopwatchNeedle = defineComponent({
  name: 'StopwatchNeedle',
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
          h('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"}),
          h('path', {"d":"M10 2L14 2"}),
          h('path', {"d":"M15 10L12 13"}),
          h('path', {"d":"M20 5L22 7"}),
          h('path', {"d":"M21 6L18.563 8.434"}),
          h('path', {"d":"M4 5L2 7"}),
          h('path', {"d":"M3 6L5.434 8.434"}),
          h('path', {"d":"M13 13C13 12.449 12.555 12 12 12C11.445 12 11 12.449 11 13C11 13.555 11.445 14 12 14C12.555 14 13 13.555 13 13Z"})
        ]
      );
  }
});

export default StopwatchNeedle;
export { StopwatchNeedle };
