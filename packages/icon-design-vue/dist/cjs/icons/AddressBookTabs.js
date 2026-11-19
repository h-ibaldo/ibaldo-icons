'use strict';

const { defineComponent, h } = require('vue');

const AddressBookTabs = defineComponent({
  name: 'AddressBookTabs',
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
          h('circle', {"cx":"10","cy":"9.999999999998181","r":"3"}),
          h('path', {"d":"M14,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790181219,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535"}),
          h('rect', {"x":"2","y":"1.999999999998181","width":"16","height":"20","rx":"1.788854381999045","ry":"1.788854381999045"}),
          h('path', {"d":"M18,3.999999999998181h4v12.76393202250074c0,.75754411691014-.428004752460765,1.450070353730553-1.105572808999568,1.788854381999045l-2.894427191000432,1.447213595500216"}),
          h('line', {"x1":"22","y1":"12.999999999998181","x2":"18","y2":"14.999999999998181"}),
          h('line', {"x1":"22","y1":"7.999999999998181","x2":"18","y2":"9.999999999998181"})
        ]
      );
  }
});

module.exports = AddressBookTabs;
module.exports.AddressBookTabs = AddressBookTabs;
module.exports.default = AddressBookTabs;
