import { defineComponent, h } from 'vue';

const SunSpokeLarge = defineComponent({
  name: 'SunSpokeLarge',
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
          h('circle', {"cx":"12.000000000314458","cy":"12.000000003949026","r":"6.000000000000114"}),
          h('line', {"x1":"2.000000000314685","y1":"12.000000003499736","x2":"6.000000000314685","y2":"12.000000003679816"}),
          h('line', {"x1":"18.000000000314685","y1":"12.000000004218236","x2":"22.000000000314685","y2":"12.000000004398316"}),
          h('line', {"x1":"12.000000000763976","y1":"2.000000003949026","x2":"12.000000000583896","y2":"6.000000003949026"}),
          h('line', {"x1":"12.000000000044565","y1":"18.000000003949026","x2":"11.999999999865395","y2":"22.000000003949026"}),
          h('line', {"x1":"4.92893218860263","y1":"4.928932191922286","x2":"7.757359313294728","y2":"7.757359316739894"}),
          h('line', {"x1":"16.242640687334642","y1":"16.242640691159977","x2":"19.071067812017645","y2":"19.071067815977585"}),
          h('line', {"x1":"19.071067812341425","y1":"4.928932192247885","x2":"16.242640687525636","y2":"7.757359316929069"}),
          h('line', {"x1":"7.757359313094639","y1":"16.242640690968983","x2":"4.928932188287945","y2":"19.071067815651986"})
        ]
      );
  }
});

export default SunSpokeLarge;
export { SunSpokeLarge };
