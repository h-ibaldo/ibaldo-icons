import { defineComponent, h } from 'vue';

const StopwatchFastKnob = defineComponent({
  name: 'StopwatchFastKnob',
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
          h('path', {"d":"M10 2L14 2"}),
          h('path', {"d":"M14 10L12 13"}),
          h('path', {"d":"M20 5L22 7"}),
          h('path', {"d":"M21 6L18.563 8.434"}),
          h('path', {"d":"M2 13L8 13"}),
          h('path', {"d":"M6 21L8 21"}),
          h('path', {"d":"M4 17L8 17"}),
          h('path', {"d":"M12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C9.039 5 6.465 6.609 5.078 9"})
        ]
      );
  }
});

export default StopwatchFastKnob;
export { StopwatchFastKnob };
