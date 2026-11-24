'use strict';

const { defineComponent, h } = require('vue');

const BrowserUpload = defineComponent({
  name: 'BrowserUpload',
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
          h('path', {"d":"M6.025268534602219,21.998779296922294h-2c-1.104569499659192,0-2-.895430500338989-2-2V3.998779296922294c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500338989,2-2,2h-2"}),
          h('line', {"x1":"2.025268534602219","y1":"7.998779296922294","x2":"22.025268534602219","y2":"7.998779296922294"}),
          h('line', {"x1":"5.035268534602437","y1":"4.998779296922294","x2":"5.025268534602219","y2":"4.998779296922294"}),
          h('line', {"x1":"8.035268534602437","y1":"4.998779296922294","x2":"8.025268534602219","y2":"4.998779296922294"}),
          h('line', {"x1":"19.025268540959587","y1":"4.998779296922294","x2":"11.025268534602219","y2":"4.998779296922294"}),
          h('polyline', {"points":"9.025268534602219 15.998779296922294 12.025268534602219 12.998779296922294 15.025268534602219 15.998779296922294"}),
          h('line', {"x1":"12.025268534602219","y1":"12.998779296922294","x2":"12.025268534602219","y2":"21.998779296922294"})
        ]
      );
  }
});

module.exports = BrowserUpload;
module.exports.BrowserUpload = BrowserUpload;
module.exports.default = BrowserUpload;
