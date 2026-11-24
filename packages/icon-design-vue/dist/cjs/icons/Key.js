'use strict';

const { defineComponent, h } = require('vue');

const Key = defineComponent({
  name: 'Key',
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
          h('path', {"d":"M16.000019575950319,2.000015258789062c-3.313720703130457,0-6,2.686279296869543-6,6,0,.605834960939319.091796875,1.18994140625.2587890625,1.741271972648974L2.000019575950319,18.000015258789062v4h4v-3h3v-3h3v-2.666687011720569l.53173828125-.443054199220569c.979736328119543.6962890625,2.174560546869543,1.109741210941138,3.46826171875,1.109741210941138,3.313720703119543,0,6-2.686279296880457,6-6,0-3.313720703130457-2.686279296880457-6-6-6Z"}),
          h('line', {"x1":"17.000019575950319","y1":"6.000015258789062","x2":"18.000019575950319","y2":"7.000015258789062"})
        ]
      );
  }
});

module.exports = Key;
module.exports.Key = Key;
module.exports.default = Key;
