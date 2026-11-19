import { defineComponent, h } from 'vue';

const ArrowClockwiseThirty = defineComponent({
  name: 'ArrowClockwiseThirty',
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
          h('path', {"d":"M19 2L19 5L16 5"}),
          h('path', {"d":"M19 4.875C17.195 3.102 14.73 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9"}),
          h('path', {"d":"M15 16C13.895 16 13 15.105 13 14L13 10C13 8.895 13.895 8 15 8C16.105 8 17 8.895 17 10L17 14C17 15.105 16.105 16 15 16Z"}),
          h('path', {"d":"M7 15.723C7.402 15.957 7.887 16.07 8.41 15.957C9.363 15.75 10 14.832 10 13.859C10 12.832 9.168 12 8.145 12L8 12"}),
          h('path', {"d":"M7 8.277C7.402 8.043 7.887 7.93 8.41 8.043C9.363 8.25 10 9.168 10 10.141C10 11.168 9.168 12 8.145 12L8 12"})
        ]
      );
  }
});

export default ArrowClockwiseThirty;
export { ArrowClockwiseThirty };
