'use strict';

const { defineComponent, h } = require('vue');

const CircleMotionDotted = defineComponent({
  name: 'CircleMotionDotted',
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
          h('circle', {"cx":"16.999999981000656","cy":"11.999996563432433","r":"5"}),
          h('path', {"d":"M9.999999981000656,7.430660625932433c-1.762451171871362.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828128638,3.79644775390625,3,4.5693359375"}),
          h('line', {"x1":"5.009999981000874","y1":"7.430660625932433","x2":"4.999999981000656","y2":"7.430660625932433"}),
          h('line', {"x1":"5.009999981000874","y1":"16.569332500932433","x2":"4.999999981000656","y2":"16.569332500932433"}),
          h('line', {"x1":"2.009999981000874","y1":"11.999996563432433","x2":"1.999999981000656","y2":"11.999996563432433"}),
          h('line', {"x1":"2.830660490519222","y1":"9.267991786638959","x2":"2.820660490520822","y2":"9.267991786638959"}),
          h('line', {"x1":"2.830660490519222","y1":"14.732001340225906","x2":"2.820660490520822","y2":"14.732001340225906"})
        ]
      );
  }
});

module.exports = CircleMotionDotted;
module.exports.CircleMotionDotted = CircleMotionDotted;
module.exports.default = CircleMotionDotted;
