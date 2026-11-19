import { defineComponent, h } from 'vue';

const SunMixedBig = defineComponent({
  name: 'SunMixedBig',
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
          h('circle', {"cx":"12","cy":"12.000000007900326","r":"4.999999999999773"}),
          h('line', {"x1":"12.00000000044929","y1":"2.000000007899871","x2":"12.000000000358341","y2":"4.000000007899871"}),
          h('line', {"x1":"11.999999999641659","y1":"20.000000007899871","x2":"11.99999999955071","y2":"22.000000007899871"}),
          h('line', {"x1":"22","y1":"12.000000008349161","x2":"20","y2":"12.000000008260031"}),
          h('line', {"x1":"4","y1":"12.00000000754153","x2":"2","y2":"12.000000007450581"}),
          h('line', {"x1":"4.92893218829704","y1":"4.928932195873131","x2":"8.464466094149429","y2":"8.464466101891958"}),
          h('line', {"x1":"15.535533905850571","y1":"15.535533913907784","x2":"19.07106781170296","y2":"19.07106781992843"}),
          h('line', {"x1":"19.071067811708417","y1":"4.928932195878588","x2":"15.535533905849661","y2":"8.46446610188832"}),
          h('line', {"x1":"8.464466094141244","y1":"15.535533913911422","x2":"4.928932188291583","y2":"19.071067819922973"})
        ]
      );
  }
});

export default SunMixedBig;
export { SunMixedBig };
