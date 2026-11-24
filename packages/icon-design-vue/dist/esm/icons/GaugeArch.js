import { defineComponent, h } from 'vue';

const GaugeArch = defineComponent({
  name: 'GaugeArch',
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
          h('path', {"d":"M19 14L18 14"}),
          h('path', {"d":"M6 14L5 14"}),
          h('path', {"d":"M7.758 18.242L7.051 18.949"}),
          h('path', {"d":"M7.051 9.051L7.758 9.758"}),
          h('path', {"d":"M16.242 18.242L16.949 18.949"}),
          h('path', {"d":"M12 7L12 8"}),
          h('path', {"d":"M19.984 20C21.246 18.328 22 16.254 22 14C22 8.477 17.523 4 12 4C6.477 4 2 8.477 2 14C2 16.254 2.754 18.328 4.012 20"}),
          h('path', {"d":"M17 9L13 13"}),
          h('path', {"d":"M13 14C13 13.445 12.555 13 12 13C11.445 13 11 13.445 11 14C11 14.555 11.445 15 12 15C12.555 15 13 14.555 13 14Z"})
        ]
      );
  }
});

export default GaugeArch;
export { GaugeArch };
