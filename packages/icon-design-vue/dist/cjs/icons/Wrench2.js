'use strict';

const { defineComponent, h } = require('vue');

const Wrench2 = defineComponent({
  name: 'Wrench2',
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
          h('path', {"d":"M21.712707513450368,5.311279303362426l-2.687438964851026,2.6875h-3v-3l2.687438964851026-2.6875c-.529418945310681-.190673828118634-1.09228515625-.3125-1.687438964851026-.3125-2.761413574209655,0-5,2.238525390631366-5,5,0,.59521484375.121765136720569,1.157958984381366.312561035159888,1.6875L3.52435302125923,17.499755865862426c-.827941894529431.827880859381366-.827941894529431,2.170166015631366,0,2.998046875l.001831054691138.001953125c.827941894529431.827880859381366,2.170227050779431.827880859381366,2.998168945308862,0l8.8134765625-8.8134765625c.529418945310681.190673828131366,1.09228515625.3125,1.687438964840112.3125,2.761413574220569,0,5-2.238525390618634,5-5,0-.59521484375-.121765136709655-1.157958984368634-.312561035148974-1.6875Z"})
        ]
      );
  }
});

module.exports = Wrench2;
module.exports.Wrench2 = Wrench2;
module.exports.default = Wrench2;
