import { defineComponent, h } from 'vue';

const TouchPinch = defineComponent({
  name: 'TouchPinch',
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
          h('circle', {"cx":"19.025268539633089","cy":"4.998779303641641","r":"3.000000000001137"}),
          h('polyline', {"points":"13.025268539615354 6.998780689154955 13.025268539255194 10.99877895701502 17.025266807115258 10.99877895737518"}),
          h('line', {"x1":"16.903930649006725","y1":"7.120117194266641","x2":"13.025268539635363","y2":"10.998779303641641"}),
          h('circle', {"cx":"5.025268539445733","cy":"18.998779303452466","r":"2.999999999999773"}),
          h('polyline', {"points":"11.025268539455283 16.998777917939151 11.025268539826357 12.998779650079086 7.025270271966292 12.998779649722564"}),
          h('line', {"x1":"7.146606430076645","y1":"16.877441412827466","x2":"11.025268539446188","y2":"12.998779303452466"})
        ]
      );
  }
});

export default TouchPinch;
export { TouchPinch };
