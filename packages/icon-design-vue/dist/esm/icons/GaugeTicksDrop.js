import { defineComponent, h } from 'vue';

const GaugeTicksDrop = defineComponent({
  name: 'GaugeTicksDrop',
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
          h('path', {"d":"M12 2L12 5"}),
          h('path', {"d":"M12 19L12 22"}),
          h('path', {"d":"M22 12L19 12"}),
          h('path', {"d":"M5 12L2 12"}),
          h('path', {"d":"M12 8L9.863 11.563C9.34 12.434 9.398 13.531 10.008 14.34C11.004 15.672 12.996 15.672 13.992 14.34C14.602 13.531 14.66 12.434 14.137 11.563Z"})
        ]
      );
  }
});

export default GaugeTicksDrop;
export { GaugeTicksDrop };
