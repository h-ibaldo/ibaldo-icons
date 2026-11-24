'use strict';

const { defineComponent, h } = require('vue');

const BellXCircleDash = defineComponent({
  name: 'BellXCircleDash',
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
          h('line', {"x1":"18.000000004469257","y1":"17.000000003885361","x2":"2.000000004469257","y2":"17.000000003885361"}),
          h('line', {"x1":"8.000000004469257","y1":"21.000000003885361","x2":"12.000000004469257","y2":"21.000000003885361"}),
          h('circle', {"cx":"16.50000000688442","cy":"7.50000000145792","r":"5.499999997576424"}),
          h('path', {"d":"M12.615722660719257,3.606445316385361c-.791442871088293-.384521484367724-1.676635742200233-.6064453125-2.61572265625-.6064453125-3.313720703128638,0-6,2.686279296882276-6,6v8"}),
          h('line', {"x1":"16.000000004469257","y1":"17.000000003885361","x2":"16.000000004469257","y2":"12.974853519517637"}),
          h('line', {"x1":"18.000000009309588","y1":"5.999999999035936","x2":"15.000000009309588","y2":"8.999999999035936"}),
          h('line', {"x1":"15.000000009380528","y1":"5.999999998966814","x2":"18.000000009249561","y2":"8.999999999105057"})
        ]
      );
  }
});

module.exports = BellXCircleDash;
module.exports.BellXCircleDash = BellXCircleDash;
module.exports.default = BellXCircleDash;
