'use strict';

const { defineComponent, h } = require('vue');

const PencilDetailed = defineComponent({
  name: 'PencilDetailed',
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
          h('path', {"d":"M21.121320343560001,4.721825414817431l-1.757359312849076-1.757359312849076c-1.171572875260608-1.171572875251513-3.071067811870307-1.171572875251513-4.242640687120002,0L3,15.085786445528356l-.99999999963984,6.99999999963984,6.99999999963984-1,12.121320343529078-12.121320343199841c1.171572875280617-1.171572875251513,1.171572875291531-3.071067811890316.000000000030923-4.242640687150924Z"}),
          h('line', {"x1":"14","y1":"4.085786445528356","x2":"20","y2":"10.085786445528356"}),
          h('line', {"x1":"12","y1":"6.085786445528356","x2":"18","y2":"12.085786445528356"}),
          h('path', {"d":"M3.9716796875,21.804048164278356c-.124877929689319-.877075195319776-.81298828125-1.565063476569776-1.68994140625-1.68994140625"}),
          h('line', {"x1":"7","y1":"17.085786445528356","x2":"15","y2":"9.085786445528356"})
        ]
      );
  }
});

module.exports = PencilDetailed;
module.exports.PencilDetailed = PencilDetailed;
module.exports.default = PencilDetailed;
