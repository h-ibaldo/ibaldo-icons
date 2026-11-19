import { defineComponent, h } from 'vue';

const GaugeArcSemicircle = defineComponent({
  name: 'GaugeArcSemicircle',
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
          h('path', {"d":"M15 11L12 16"}),
          h('path', {"d":"M13 16C13 15.445 12.555 15 12 15C11.445 15 11 15.445 11 16C11 16.555 11.445 17 12 17C12.555 17 13 16.555 13 16Z"}),
          h('path', {"d":"M2 16C2 10.477 6.477 6 12 6C17.523 6 22 10.477 22 16"}),
          h('path', {"d":"M10.934 10.105C8.129 10.609 6 13.051 6 16"}),
          h('path', {"d":"M18 16C18 15.434 17.914 14.891 17.77 14.367"})
        ]
      );
  }
});

export default GaugeArcSemicircle;
export { GaugeArcSemicircle };
