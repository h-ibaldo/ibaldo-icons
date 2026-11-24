'use strict';

const { defineComponent, h } = require('vue');

const DocumentStack = defineComponent({
  name: 'DocumentStack',
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
          h('rect', {"x":"7.025268548599342","y":"5.998779303362426","width":"15","height":"16","rx":"1","ry":"1"}),
          h('path', {"d":"M16.025268548599342,5.998779303362426v-3c0-.552284749829596-.447715250169495-1-1-1H3.025268548599342c-.552284749830505,0-1,.447715250170404-1,1v14c0,.552284749831415.447715250169495,1,1,1h4"}),
          h('line', {"x1":"11.025268548599342","y1":"9.998779303362426","x2":"18.025268548599342","y2":"9.998779303362426"}),
          h('line', {"x1":"11.025268548599342","y1":"13.998779303362426","x2":"18.025268548599342","y2":"13.998779303362426"}),
          h('line', {"x1":"11.025268548599342","y1":"17.998779303362426","x2":"18.025268548599342","y2":"17.998779303362426"})
        ]
      );
  }
});

module.exports = DocumentStack;
module.exports.DocumentStack = DocumentStack;
module.exports.default = DocumentStack;
