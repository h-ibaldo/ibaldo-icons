'use strict';

const { defineComponent, h } = require('vue');

const TagEmpty = defineComponent({
  name: 'TagEmpty',
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
          h('path', {"d":"M20.396583438901871,17.998779302937692H7.333333330872847c-.593559685030414,0-1.1564549085615-.26364601991736-1.536442559190618-.719631200670847l-3.866820333059877-4.640184399664577c-.309038293860795-.370845952642412-.309038293860795-.909522846683103,0-1.280368799329153l3.866820333059877-4.640184399664577c.379987650629118-.455985180753487.942882874160205-.719631200670847,1.536442559190618-.719631200670847h13.063250108029024c.552284749838691,0,1,.447715250171314,1,1v10c0,.552284749832324-.447715250161309,1-1,1Z"})
        ]
      );
  }
});

module.exports = TagEmpty;
module.exports.TagEmpty = TagEmpty;
module.exports.default = TagEmpty;
