'use strict';

const { defineComponent, h } = require('vue');

const Faq = defineComponent({
  name: 'Faq',
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
          h('path', {"d":"M2.949462885139837,16.000000000480213V7.000000000480213c0-.552284749832324.447715250170404-1,1-1h2"}),
          h('line', {"x1":"5.949462885139837","y1":"12.000000000480213","x2":"2.949462885139837","y2":"12.000000000480213"}),
          h('path', {"d":"M8.949462885139837,16.000000000480213l.909950371899868-9.099503719022323c.051120179750797-.511201797438844.481285742050204-.900496280977677.995037190210496-.900496280977677h1.190024875779272c.513751448160292,0,.943917010460609.389294483538833.995037190210496.900496280977677l.909950371899868,9.099503719022323"}),
          h('rect', {"x":"16.949462885139837","y":"6.000000000480213","width":"4","height":"10","rx":"1","ry":"1"}),
          h('line', {"x1":"18.949462885139837","y1":"18.000000000480213","x2":"20.949462885139837","y2":"19.000000000480213"}),
          h('line', {"x1":"13.549438471080066","y1":"12.000000000480213","x2":"9.349487299199609","y2":"12.000000000480213"})
        ]
      );
  }
});

module.exports = Faq;
module.exports.Faq = Faq;
module.exports.default = Faq;
