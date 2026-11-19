'use strict';

const { defineComponent, h } = require('vue');

const BinocularsWide = defineComponent({
  name: 'BinocularsWide',
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
          h('circle', {"cx":"6.999988017279975","cy":"16.936828613188482","r":"5"}),
          h('circle', {"cx":"16.999988017279975","cy":"16.936828613188482","r":"5"}),
          h('path', {"d":"M21.999988017279975,16.936828613188482V6.936828613188482c0-1.656860351560681-1.343139648439319-3-3-3,0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2h-4c0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2-1.656860351560681,0-3,1.343139648439319-3,3v10"})
        ]
      );
  }
});

module.exports = BinocularsWide;
module.exports.BinocularsWide = BinocularsWide;
module.exports.default = BinocularsWide;
