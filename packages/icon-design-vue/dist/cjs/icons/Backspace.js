'use strict';

const { defineComponent, h } = require('vue');

const Backspace = defineComponent({
  name: 'Backspace',
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
          h('path', {"d":"M20.066798314910557,20.000000000448381h-11.121044868210447c-.598719247880581,0-1.165948229980131-.268229385055747-1.545838299820389-.730990957164977l-4.925517926340035-6.000000000001819c-.60554893357039-.737647016158007-.60554893357039-1.800371069508401,0-2.538018085666408l4.925517926340035-6.000000000001819c.379890069840258-.46276157210923.947119051939808-.730990957164977,1.545838299820389-.730990957164977h11.121044868210447c1.104569499659192,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500340808,2-2,2Z"}),
          h('line', {"x1":"16.999999990659489","y1":"9.000000000584805","x2":"10.999999990930519","y2":"15.000000000313776"}),
          h('line', {"x1":"10.999999990790457","y1":"9.000000000717591","x2":"16.999999990790457","y2":"15.00000000018008"})
        ]
      );
  }
});

module.exports = Backspace;
module.exports.Backspace = Backspace;
module.exports.default = Backspace;
