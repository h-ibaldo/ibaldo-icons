'use strict';

const { defineComponent, h } = require('vue');

const BookInfoRounded = defineComponent({
  name: 'BookInfoRounded',
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
          h('rect', {"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}),
          h('path', {"d":"M4,20v-.000002000000677c0-1.10456838878963.895429604909623-1.999997999999323,1.999997999999323-1.999997999999323h12.000004000001354c1.104568395099705,0,1.999997999999323-.895429611209693,1.999997999999323-1.999997999999323v-.000002000000677"}),
          h('line', {"x1":"12","y1":"6.989999999999782","x2":"12","y2":"7"}),
          h('line', {"x1":"12","y1":"13","x2":"12","y2":"10"})
        ]
      );
  }
});

module.exports = BookInfoRounded;
module.exports.BookInfoRounded = BookInfoRounded;
module.exports.default = BookInfoRounded;
