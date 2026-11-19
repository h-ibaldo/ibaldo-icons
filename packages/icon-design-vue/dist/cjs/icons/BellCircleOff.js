'use strict';

const { defineComponent, h } = require('vue');

const BellCircleOff = defineComponent({
  name: 'BellCircleOff',
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
          h('circle', {"cx":"11.974731449503452","cy":"12.000000000480213","r":"10"}),
          h('path', {"d":"M13.974731449503452,15.000000000480213v1.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-1.000002000000677"}),
          h('line', {"x1":"19.045776371378452","y1":"4.928955078608851","x2":"4.903686527628452","y2":"19.071044922358851"}),
          h('path', {"d":"M8.974731449503452,15.000000000480213h7.131469726560681c.798706054689319,0,1.275085449220569-.89013671875.832092285157159-1.5546875l-.963562011717841-1.4453125v-2c0-.586181640621362-.133117675782159-1.138671875-.359619140625-1.640380859371362"}),
          h('path', {"d":"M12.866821293253452,6.107910156730213c-.28778076171875-.065795898441138-.584350585939319-.10791015625-.89208984375-.10791015625-2.20916748046875,0-4,1.790771484378638-4,4v1"})
        ]
      );
  }
});

module.exports = BellCircleOff;
module.exports.BellCircleOff = BellCircleOff;
module.exports.default = BellCircleOff;
