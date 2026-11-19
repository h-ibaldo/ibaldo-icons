import { defineComponent, h } from 'vue';

const ClockSplit = defineComponent({
  name: 'ClockSplit',
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
          h('path', {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2"}),
          h('path', {"d":"M12 6L12 12L8 14"}),
          h('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 12.34 2.035 12.668 2.07 13"})
        ]
      );
  }
});

export default ClockSplit;
export { ClockSplit };
