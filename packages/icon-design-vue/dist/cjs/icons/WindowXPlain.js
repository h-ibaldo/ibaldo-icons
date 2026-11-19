'use strict';

const { defineComponent, h } = require('vue');

const WindowXPlain = defineComponent({
  name: 'WindowXPlain',
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
          h('path', {"d":"M12.025268553292335,21.99877930339062h-7c-1.656854249498792,0-3-1.343145750510303-3-3V4.99877930339062c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v7"}),
          h('line', {"x1":"2.025268553292335","y1":"7.99877930339062","x2":"22.025268553292335","y2":"7.99877930339062"}),
          h('line', {"x1":"22.025268553292335","y1":"21.99877930339062","x2":"16.025268553292335","y2":"15.99877930339062"}),
          h('line', {"x1":"22.025268553292335","y1":"15.99877930339062","x2":"16.025268553292335","y2":"21.99877930339062"})
        ]
      );
  }
});

module.exports = WindowXPlain;
module.exports.WindowXPlain = WindowXPlain;
module.exports.default = WindowXPlain;
