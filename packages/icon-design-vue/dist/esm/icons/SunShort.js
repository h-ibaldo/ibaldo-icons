import { defineComponent, h } from 'vue';

const SunShort = defineComponent({
  name: 'SunShort',
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
          h('circle', {"cx":"12","cy":"12.000000005924448","r":"4"}),
          h('line', {"x1":"12","y1":"20.000000005924448","x2":"12","y2":"22.000000005924448"}),
          h('line', {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"4.000000005924448"}),
          h('line', {"x1":"20","y1":"12.000000006284608","x2":"22","y2":"12.000000006375558"}),
          h('line', {"x1":"2","y1":"12.000000005475158","x2":"4","y2":"12.000000005564289"}),
          h('line', {"x1":"17.656854249369644","y1":"17.656854255545113","x2":"19.071067811710236","y2":"19.071067817945732"}),
          h('line', {"x1":"4.928932188289764","y1":"4.928932193904984","x2":"6.343145750639451","y2":"6.343145756305603"}),
          h('line', {"x1":"17.65685424988078","y1":"6.34314575681492","x2":"19.071067812339606","y2":"4.928932194534354"}),
          h('line', {"x1":"4.928932187660394","y1":"19.071067817314542","x2":"6.343145750130134","y2":"17.656854255033977"})
        ]
      );
  }
});

export default SunShort;
export { SunShort };
