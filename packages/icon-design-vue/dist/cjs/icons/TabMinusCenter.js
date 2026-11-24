'use strict';

const { defineComponent, h } = require('vue');

const TabMinusCenter = defineComponent({
  name: 'TabMinusCenter',
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
          h('path', {"d":"M8.025268532079281,1.99877930112325h8.558125457540882c.911351166329041,0,1.773289868140637.414269157099625,2.342606428330328,1.125914857337193l2.441874542459118,3.052343178074807c.425551315509438.531939144388161.657393571669672,1.192870657007006.657393571669672,1.874085142662807v.947656821925193"}),
          h('path', {"d":"M20.025268532079281,21.99877930112325H4.025268532079281c-1.104569499659192,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500340808-2,2-2h3.558125457540882c.911351166329041,0,1.773289868140637.414269157099625,2.342606428330328,1.125914857337193l2.1985362282594,2.748170285325614c.569316560189691.711645700237568,1.431255261999468,1.125914857337193,2.342606428330328,1.125914857337193h5.558125457539063c1.104569499661011,0,2,.895430500338989,2,2v11c0,1.104569499661011-.895430500338989,2-2,2Z"}),
          h('line', {"x1":"15.025268532079281","y1":"13.99877930112325","x2":"9.025268532079281","y2":"13.99877930112325"})
        ]
      );
  }
});

module.exports = TabMinusCenter;
module.exports.TabMinusCenter = TabMinusCenter;
module.exports.default = TabMinusCenter;
