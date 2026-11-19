'use strict';

const { defineComponent, h } = require('vue');

const LoginSquare = defineComponent({
  name: 'LoginSquare',
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
          h('polyline', {"points":"10.067167566010539 9.43296768574146 13.067167566010539 12.43296768574146 10.067167566010539 15.43296768574146"}),
          h('line', {"x1":"2.067167566010539","y1":"12.43296768574146","x2":"13.067167566010539","y2":"12.43296768574146"}),
          h('rect', {"x":"2.067167566010539","y":"2.43296768574146","width":"20","height":"20","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = LoginSquare;
module.exports.LoginSquare = LoginSquare;
module.exports.default = LoginSquare;
