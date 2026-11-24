'use strict';

const { defineComponent, h } = require('vue');

const BookBookmarkCurved = defineComponent({
  name: 'BookBookmarkCurved',
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
          h('path', {"d":"M4.000000026699126,17.999999863237463V5.999999870498868c0-2.209138997910486,1.79086099846063-3.999999994361133,3.999999996360202-3.999999996371116l12.000000003639798-.00000001089029v12l-12.000003836088581-.000000122938218c-2.2091368740912-.000000022631866-3.999996163911419,1.790859248849301-3.999996163911419,3.999996122929588v.00000799999907c0,2.209136883520841,1.790859298831492,3.999996161939634,3.99999618234142,3.999996136761183l12.00000381765858-.000000136760718"}),
          h('line', {"x1":"8.000000026699126","y1":"17.999999863237463","x2":"20.000000026699126","y2":"17.999999863237463"}),
          h('polyline', {"points":"16.000000026699126 1.999999999998181 16.000000026699126 10.000000000007276 13.000000026699126 8.000000000007276 10.000000026699126 10.000000000007276 10.000000026699126 1.999999999998181"})
        ]
      );
  }
});

module.exports = BookBookmarkCurved;
module.exports.BookBookmarkCurved = BookBookmarkCurved;
module.exports.default = BookBookmarkCurved;
