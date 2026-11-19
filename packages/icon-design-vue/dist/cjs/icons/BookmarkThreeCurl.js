'use strict';

const { defineComponent, h } = require('vue');

const BookmarkThreeCurl = defineComponent({
  name: 'BookmarkThreeCurl',
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
          h('path', {"d":"M21,2H7c-1.656854249493335,0-3,1.343145750510303-3,3v17l7-4.000000004851245,7,4.000000004851245V4.999997000000803c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016Z"}),
          h('path', {"d":"M9,7h4l-2,3,.84360230643324.421801153219349c.70871690353124.354358451761073,1.15639769356676,1.078721186149778,1.15639769356676,1.871090772699972v.000002000000677c0,.452752415530995-.179855196776771.886961270860411-.499999499999831,1.207105574079833l-.000001000000339.000001000000339c-.32014430322306.320144303219422-.7543531585452.499999499999831-1.207105574079833.499999499999831h-.000001999998858c-.827824797357607,0-1.621744046235108-.32885212031033-2.207104574081313-.914212648160174l-.085787351839826-.085787351839826"})
        ]
      );
  }
});

module.exports = BookmarkThreeCurl;
module.exports.BookmarkThreeCurl = BookmarkThreeCurl;
module.exports.default = BookmarkThreeCurl;
