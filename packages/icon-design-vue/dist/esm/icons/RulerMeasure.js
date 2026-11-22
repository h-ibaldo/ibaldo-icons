import { defineComponent, h } from 'vue';

const RulerMeasure = defineComponent({
  name: 'RulerMeasure',
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
          h('path', {"d":"M3 11L21 11C21.551 11 22 11.449 22 12L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 12C2 11.449 2.449 11 3 11Z"}),
          h('path', {"d":"M6 14L6 11"}),
          h('path', {"d":"M2 8L2 4"}),
          h('path', {"d":"M22 8L22 4"}),
          h('path', {"d":"M2 6L22 6"}),
          h('path', {"d":"M10 14L10 11"}),
          h('path', {"d":"M14 14L14 11"}),
          h('path', {"d":"M18 14L18 11"})
        ]
      );
  }
});

export default RulerMeasure;
export { RulerMeasure };
