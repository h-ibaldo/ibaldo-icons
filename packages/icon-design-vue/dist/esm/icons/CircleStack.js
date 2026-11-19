import { defineComponent, h } from 'vue';

const CircleStack = defineComponent({
  name: 'CircleStack',
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
          h('circle', {"cx":"7.999999976489562","cy":"15.998779299956368","r":"6"}),
          h('path', {"d":"M17.74127194914945,13.740051272612618c2.464111328130457-.7464599609375,4.258728027340112-3.03338623046875,4.258728027340112-5.74127197265625,0-3.313720703125-2.686279296869543-6-6-6-2.707885742180224,0-4.994812011709655,1.79461669921875-5.741271972648974,4.25872802734375"}),
          h('path', {"d":"M13.74127194914945,17.740051272612618c2.464111328130457-.7464599609375,4.258728027340112-3.03338623046875,4.258728027340112-5.74127197265625,0-3.313720703125-2.686279296869543-6-6-6-2.707885742180224,0-4.994812011709655,1.79461669921875-5.741271972648974,4.25872802734375"})
        ]
      );
  }
});

export default CircleStack;
export { CircleStack };
