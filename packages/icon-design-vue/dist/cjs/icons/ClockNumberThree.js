'use strict';

const { defineComponent, h } = require('vue');

const ClockNumberThree = defineComponent({
  name: 'ClockNumberThree',
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
          h('path', {"d":"M2,14.999999999887223h4l-2,3,.843602306429602.421801153221168c.70871690353124.354358451761073,1.156397693570398,1.078721186149778,1.156397693570398,1.871090772699972v.000002000000677c0,.452752415529176-.179855196780409.886961270858592-.499999499999831,1.207105574078014l-.000001000000339.000001000000339c-.320144303219422.320144303221241-.754353158539743.499999499999831-1.207105574079833.499999499999831h-.000002000000677c-.827824797359426,0-1.621744046229651-.32885212031033-2.207104574079494-.914212648160174l-.085787351839826-.085787351839826"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('path', {"d":"M10,21.799072265508585c.646240234369543.13134765625,1.31494140625.200927734378638,2,.200927734378638,5.52294921875,0,10-4.477172851558862,10-10,0-5.522827148439319-4.47705078125-10-10-10C6.814697265619543,1.999999999887223,2.552368164060681,5.946777343637223,2.050537109369543,10.999999999887223"})
        ]
      );
  }
});

module.exports = ClockNumberThree;
module.exports.ClockNumberThree = ClockNumberThree;
module.exports.default = ClockNumberThree;
