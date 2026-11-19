'use strict';

const { defineComponent, h } = require('vue');

const ArrowSyncCounterclockwiseOffRotated = defineComponent({
  name: 'ArrowSyncCounterclockwiseOffRotated',
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
          h('polyline', {"points":"12.99999999973079 2.000000000090949 10.99999999963984 4 12.999999999553438 6.000000000090949"}),
          h('polyline', {"points":"10.999999999014108 22 12.999999998923158 19.999999999909051 10.999999998832209 18"}),
          h('line', {"x1":"20","y1":"4.000000000090949","x2":"3.999999999283318","y2":"19.99999999937063"}),
          h('g', {}, [
            h('path', {"d":"M12,3.99999999973079c2.209106445311591.000000000098225,4.209167480428732.895507812689175,5.656860351460637,2.343139648688521"}),
            h('path', {"d":"M19.791381835661014,10.208618164138898c.132141113255784.576782226572504.20861816400793,1.174560546891371.208618163981555,1.791381835952052-.000000000119144,2.628173828128638-1.267333984596007,4.960327148379292-3.224182129192741,6.418701171729481"})
          ]),
          h('g', {}, [
            h('path', {"d":"M11.999999999284228,19.99999999973079c-2.209167480469659-.000000000101863-4.209106445273392-.895385742369399-5.656860351457908-2.34313964869034"}),
            h('path', {"d":"M4.208618163625943,13.791381835319044c-.132141113255784-.576782226569776-.208618164011568-1.174560546878638-.208618163982464-1.791381835948414.000000000116415-2.628173828121362,1.267333984596917-4.960327148379292,3.22418212919365-6.418701171729481"})
          ])
        ]
      );
  }
});

module.exports = ArrowSyncCounterclockwiseOffRotated;
module.exports.ArrowSyncCounterclockwiseOffRotated = ArrowSyncCounterclockwiseOffRotated;
module.exports.default = ArrowSyncCounterclockwiseOffRotated;
