import { defineComponent, h } from 'vue';

const GaugeTicksDenseDrop = defineComponent({
  name: 'GaugeTicksDenseDrop',
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
          h('path', {"d":"M19 5L17 7"}),
          h('path', {"d":"M7 17L5 19"}),
          h('path', {"d":"M19 19L17 17"}),
          h('path', {"d":"M7 7L5 5"}),
          h('path', {"d":"M12 8L10.281 13.16C10.105 13.688 10.184 14.273 10.492 14.738C11.211 15.813 12.789 15.813 13.508 14.738C13.816 14.273 13.895 13.688 13.719 13.16Z"})
        ]
      );
  }
});

export default GaugeTicksDenseDrop;
export { GaugeTicksDenseDrop };
