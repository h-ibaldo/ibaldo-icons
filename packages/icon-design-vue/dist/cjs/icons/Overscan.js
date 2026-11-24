'use strict';

const { defineComponent, h } = require('vue');

const Overscan = defineComponent({
  name: 'Overscan',
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
          h('rect', {"x":"1.974731449505271","y":"2.000000000479304","width":"20","height":"20.000000000000909","rx":"2.999999999999863","ry":"2.999999999999863"}),
          h('polyline', {"points":"13.974731449905448 7.000000000659384 11.974731450083709 5.000000000479304 9.974731449905448 7.000000000301952"}),
          h('polyline', {"points":"13.974731449905448 17.000000000298314 11.974731450083709 19.000000000480213 9.974731449905448 17.000000000659384"}),
          h('polyline', {"points":"6.974731449774481 10.000000000211003 4.974731449505271 11.999999999941792 6.97473144923606 14.000000000211003"}),
          h('polyline', {"points":"16.974731449414321 10.000000000571163 18.974731449505271 12.000000000480213 16.97473144959622 14.000000000571163"})
        ]
      );
  }
});

module.exports = Overscan;
module.exports.Overscan = Overscan;
module.exports.default = Overscan;
