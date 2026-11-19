'use strict';

const { defineComponent, h } = require('vue');

const NotebookInfo = defineComponent({
  name: 'NotebookInfo',
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
          h('rect', {"x":"5.025268548599342","y":"2.998779303362426","width":"15","height":"18","rx":"2","ry":"2"}),
          h('line', {"x1":"3.025268548599342","y1":"6.998779303362426","x2":"7.025268548599342","y2":"6.998779303362426"}),
          h('line', {"x1":"3.025268548599342","y1":"11.998779303362426","x2":"7.025268548599342","y2":"11.998779303362426"}),
          h('line', {"x1":"3.025268548599342","y1":"16.998779303362426","x2":"7.025268548599342","y2":"16.998779303362426"}),
          h('line', {"x1":"13.025268548599342","y1":"8.988779303362207","x2":"13.025268548599342","y2":"8.998779303362426"}),
          h('line', {"x1":"13.025268548599342","y1":"14.998779303362426","x2":"13.025268548599342","y2":"11.998779303362426"})
        ]
      );
  }
});

module.exports = NotebookInfo;
module.exports.NotebookInfo = NotebookInfo;
module.exports.default = NotebookInfo;
