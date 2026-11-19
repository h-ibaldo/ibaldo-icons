'use strict';

const { defineComponent, h } = require('vue');

const BookmarkThree = defineComponent({
  name: 'BookmarkThree',
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
          h('path', {"d":"M10,6.999999999998181h4l-2,3,.843602306429602.421801153219349c.70871690353033.354358451761073,1.156397693570398,1.078721186149778,1.156397693570398,1.871090772700882v.000001999999768c0,.452752415530995-.179855196780409.886961270860411-.499999499999831,1.207105574079833l-.000001000000339.000001000000339c-.320144303219422.320144303219422-.754353158549748.499999499999831-1.207105574079833.499999499999831h-.000001999999768c-.827824797360336,0-1.62174404623056-.32885212031033-2.207104574080404-.914212648160174l-.085787351839826-.085787351839826"})
        ]
      );
  }
});

module.exports = BookmarkThree;
module.exports.BookmarkThree = BookmarkThree;
module.exports.default = BookmarkThree;
