'use strict';

const { defineComponent, h } = require('vue');

const Tag = defineComponent({
  name: 'Tag',
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
          h('path', {"d":"M20.999999997542545,17.998779302937692H7.936749889511702c-.593559685039509,0-1.156454908570595-.26364601991736-1.536442559208808-.719631200670847l-3.866820333041687-4.640184399664577c-.309038293869889-.370845952642412-.309038293869889-.909522846683103,0-1.280368799329153l3.866820333041687-4.640184399664577c.379987650638213-.455985180753487.9428828741693-.719631200670847,1.536442559208808-.719631200670847h13.063250108030843c.552284749828686,0,1,.447715250171314,1,1v10c0,.552284749832324-.447715250171314,1-1,1Z"}),
          h('line', {"x1":"8.009999997542764","y1":"11.998779302937692","x2":"7.999999997542545","y2":"11.998779302937692"})
        ]
      );
  }
});

module.exports = Tag;
module.exports.Tag = Tag;
module.exports.default = Tag;
