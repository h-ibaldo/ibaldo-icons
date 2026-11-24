'use strict';

const { defineComponent, h } = require('vue');

const LockOpen = defineComponent({
  name: 'LockOpen',
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
          h('path', {"d":"M16.552612309429605,5.000000003885361c-.772216796889552-1.764404296875-2.528686523450233-3-4.577880859389552-3-2.761474609360448,0-5,2.23858642578125-5,5v3"}),
          h('rect', {"x":"3.974731450040053","y":"10.000000003885361","width":"16","height":"12","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = LockOpen;
module.exports.LockOpen = LockOpen;
module.exports.default = LockOpen;
