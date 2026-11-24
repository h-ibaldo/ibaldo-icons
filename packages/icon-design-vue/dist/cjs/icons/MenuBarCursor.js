'use strict';

const { defineComponent, h } = require('vue');

const MenuBarCursor = defineComponent({
  name: 'MenuBarCursor',
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
          h('path', {"d":"M9.316227769159923,13.947466034229365l2.168424891179711,6.505274674051179c.135085105140206.405255315428803.683307559100285.465434916008235.903088111880606.09913399472498l1.562006699129597-2.603344498416845,2.603344498490515-1.56200669901591c.366300921289621-.219780552761222.306121320739294-.768003006731306-.099133994680415-.903088111881516l-6.50527467396023-2.168424891482573c-.390879015159953-.130293005062413-.762748537089465.241576516847999-.632455532039785.632455532020685Z"}),
          h('line', {"x1":"6.000000003159585","y1":"5.998782736171052","x2":"8.000000003159585","y2":"5.998782736171052"}),
          h('line', {"x1":"11.000000003159585","y1":"5.998782736171052","x2":"13.000000003159585","y2":"5.998782736171052"}),
          h('line', {"x1":"16.000000003159585","y1":"5.998782736171052","x2":"18.000000003159585","y2":"5.998782736171052"}),
          h('rect', {"x":"2.000000003159585","y":"1.998782736171052","width":"20","height":"8","rx":"1","ry":"1"}),
          h('line', {"x1":"14.000000003159585","y1":"17.998782736171052","x2":"17.000000003159585","y2":"20.998782736171052"})
        ]
      );
  }
});

module.exports = MenuBarCursor;
module.exports.MenuBarCursor = MenuBarCursor;
module.exports.default = MenuBarCursor;
