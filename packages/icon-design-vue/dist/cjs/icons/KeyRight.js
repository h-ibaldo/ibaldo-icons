'use strict';

const { defineComponent, h } = require('vue');

const KeyRight = defineComponent({
  name: 'KeyRight',
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
          h('path', {"d":"M22.000019575949409,10.000015258789062h-10.422119140628638c-.772216796871362-1.764404296880457-2.528686523430224-3-4.577880859371362-3-2.761474609378638,0-5,2.238586425779431-5,5,0,2.76141357421875,2.238525390621362,5,5,5,2.049194335941138,0,3.8056640625-1.235595703130457,4.577880859371362-3h4.422119140628638v3h4v-3h2v-4Z"})
        ]
      );
  }
});

module.exports = KeyRight;
module.exports.KeyRight = KeyRight;
module.exports.default = KeyRight;
