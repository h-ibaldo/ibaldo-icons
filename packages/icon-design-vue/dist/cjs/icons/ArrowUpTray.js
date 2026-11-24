'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpTray = defineComponent({
  name: 'ArrowUpTray',
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
          h('path', {"d":"M1.974731449505271,18.000000000480213v2c0,1.104569499661011.895430500338989,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2"}),
          h('polyline', {"points":"13.974731449905448 4.000000000659384 11.974731450083709 2.000000000479304 9.974731449905448 4.000000000301952"}),
          h('polyline', {"points":"3.974731449505271 6.000000000401997 1.974731449505271 8.000000000400178 3.974731449505271 10.000000000400178"}),
          h('path', {"d":"M1.974731449505271,8.000000000400178h2.999999999869033c1.656854249471508,0,2.999999999970896,1.343145750473923,3,2.99999999994543l.000000000130967,6.999999999952706"}),
          h('polyline', {"points":"19.974731449145111 6.000000000355612 21.97473144923606 8.000000000265572 19.974731449323372 10.000000000356522"}),
          h('path', {"d":"M21.97473144923606,8.000000000265572l-2.999999999872671.000000000134605c-1.65685424946787.000000000076398-2.999999999909051,1.343145750608528-2.999999999858119,3.000000000080036l.000000000178261,6.999999999952706"}),
          h('line', {"x1":"11.974731450083709","y1":"2.000000000479304","x2":"11.974731448923194","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = ArrowUpTray;
module.exports.ArrowUpTray = ArrowUpTray;
module.exports.default = ArrowUpTray;
