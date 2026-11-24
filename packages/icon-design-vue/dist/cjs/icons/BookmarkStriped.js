'use strict';

const { defineComponent, h } = require('vue');

const BookmarkStriped = defineComponent({
  name: 'BookmarkStriped',
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
          h('path', {"d":"M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z"}),
          h('line', {"x1":"19","y1":"15.999999999998181","x2":"15.181884765619543","y2":"19.818115234367724"}),
          h('line', {"x1":"19","y1":"11.999999999998181","x2":"12.636352539059772","y2":"18.363647460938409"}),
          h('line', {"x1":"19","y1":"7.999999999998181","x2":"5","y2":"21.999999999998181"}),
          h('line', {"x1":"5","y1":"17.999999999998181","x2":"19","y2":"3.999999999998181"}),
          h('line', {"x1":"17","y1":"1.999999999998181","x2":"5","y2":"13.999999999998181"}),
          h('line', {"x1":"5","y1":"9.999999999998181","x2":"13","y2":"1.999999999998181"}),
          h('line', {"x1":"9","y1":"1.999999999998181","x2":"5","y2":"5.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkStriped;
module.exports.BookmarkStriped = BookmarkStriped;
module.exports.default = BookmarkStriped;
