'use strict';

const { defineComponent, h } = require('vue');

const LinkCheck = defineComponent({
  name: 'LinkCheck',
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
          h('path', {"d":"M3.684997562779245,8.261657715323963c-1.040466308588293.916259765625-1.710266113279431,2.24298095703125-1.710266113279431,3.73834228515625,0,2.76141357421875,2.238586425779431,5,5,5h5c2.761413574220569,0,5-2.23858642578125,5-5s-2.238586425779431-5-5-5h-1"}),
          h('path', {"d":"M20.264465335889327,10.738342286287661c1.040466308670148-.916259765530413,1.710266113481339-2.242980956874817,1.710266113610487-3.738342284999817.000000000260115-2.761413574219659-2.238586425330141-5.000000000201908-4.999999999548891-5.0000000004502l-5-.00000000044929c-2.761413574220569-.000000000248292-5.000000000190994,2.23858642533196-5.000000000451109,4.9999999995498-.000000000249202,2.76141357421875,2.238586425330141,5.000000000203727,4.99999999955071,5.000000000451109l1,.000000000090949"}),
          h('polyline', {"points":"15.974731449499814 20.000000000480213 17.974731449499814 22.000000000480213 21.974731449499814 18.000000000480213"})
        ]
      );
  }
});

module.exports = LinkCheck;
module.exports.LinkCheck = LinkCheck;
module.exports.default = LinkCheck;
