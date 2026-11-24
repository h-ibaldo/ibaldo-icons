'use strict';

const { defineComponent, h } = require('vue');

const AddressBookSpine = defineComponent({
  name: 'AddressBookSpine',
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
          h('circle', {"cx":"14","cy":"9.999999999998181","r":"3"}),
          h('path', {"d":"M18,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790181219,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535"}),
          h('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"6","y1":"1.999999999998181","x2":"6","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = AddressBookSpine;
module.exports.AddressBookSpine = AddressBookSpine;
module.exports.default = AddressBookSpine;
