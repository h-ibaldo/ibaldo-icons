'use strict';

const { defineComponent, h } = require('vue');

const BookInfoTilted = defineComponent({
  name: 'BookInfoTilted',
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
          h('path', {"d":"M22.025268548599342,11.498779303362426l-7,10.5-12-3-.000000888179784-.000001940898983c-.586376851719251-1.281381454300572-.914672186630924-2.665695142539334-.966148104309468-4.073930403752456l-.033851007510748-.926067655348561L10.025268548599342,1.998779303362426l12,3-8,12-12-3"}),
          h('line', {"x1":"13.535268548599561","y1":"6.988779303362207","x2":"13.525268548599342","y2":"6.998779303362426"}),
          h('line', {"x1":"10.525268548599342","y1":"11.998779303362426","x2":"12.025268548599342","y2":"9.498779303362426"})
        ]
      );
  }
});

module.exports = BookInfoTilted;
module.exports.BookInfoTilted = BookInfoTilted;
module.exports.default = BookInfoTilted;
