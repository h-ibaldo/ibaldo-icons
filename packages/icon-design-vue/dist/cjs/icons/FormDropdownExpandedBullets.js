'use strict';

const { defineComponent, h } = require('vue');

const FormDropdownExpandedBullets = defineComponent({
  name: 'FormDropdownExpandedBullets',
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
          h('rect', {"x":"1.974731444101053","y":"2.99999999557258","width":"20","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"15.974731444101053","y1":"2.999999995576218","x2":"15.974731444101053","y2":"8.99999999557258"}),
          h('path', {"d":"M1.974731444101053,8.99999999557258v11c0,.552284749828686.447715250169495,1,1,1h12c.552284749828686,0,1-.447715250171314,1-1v-11"}),
          h('line', {"x1":"5.964731444100835","y1":"12.99999999557258","x2":"5.974731444101053","y2":"12.99999999557258"}),
          h('line', {"x1":"5.964731444100835","y1":"16.99999999557258","x2":"5.974731444101053","y2":"16.99999999557258"}),
          h('line', {"x1":"11.974731444101053","y1":"12.99999999557258","x2":"8.974731444101053","y2":"12.99999999557258"}),
          h('line', {"x1":"11.974731444101053","y1":"16.99999999557258","x2":"8.974731444101053","y2":"16.99999999557258"})
        ]
      );
  }
});

module.exports = FormDropdownExpandedBullets;
module.exports.FormDropdownExpandedBullets = FormDropdownExpandedBullets;
module.exports.default = FormDropdownExpandedBullets;
