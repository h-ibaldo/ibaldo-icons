'use strict';

const { defineComponent, h } = require('vue');

const Document = defineComponent({
  name: 'Document',
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
          h('line', {"x1":"16.999999994219252","y1":"9.998779300538445","x2":"6.999999994219252","y2":"9.998779300090973"}),
          h('line', {"x1":"16.999999994399332","y1":"13.998779299956368","x2":"6.999999994399332","y2":"13.998779299505259"}),
          h('line', {"x1":"16.999999994399332","y1":"17.998779300403839","x2":"6.999999994399332","y2":"17.998779299956368"}),
          h('line', {"x1":"16.999999994410246","y1":"5.998779300538445","x2":"6.999999994410246","y2":"5.998779300090973"}),
          h('rect', {"x":"2.999999994394784","y":"1.998779300314709","width":"18","height":"19.999999999236024","rx":".999999999997829","ry":".999999999997829"})
        ]
      );
  }
});

module.exports = Document;
module.exports.Document = Document;
module.exports.default = Document;
