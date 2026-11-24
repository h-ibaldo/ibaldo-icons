import { defineComponent, h } from 'vue';

const GaugeArrowRight = defineComponent({
  name: 'GaugeArrowRight',
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
          h('path', {"d":"M16 8L12 12"}),
          h('path', {"d":"M11 12C11 11.445 11.445 11 12 11C12.555 11 13 11.445 13 12C13 12.555 12.555 13 12 13C11.445 13 11 12.555 11 12Z"}),
          h('path', {"d":"M2 19L10 19"}),
          h('path', {"d":"M7 16L10 19L7 22"}),
          h('path', {"d":"M13 21.949C18.055 21.445 22 17.184 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"})
        ]
      );
  }
});

export default GaugeArrowRight;
export { GaugeArrowRight };
