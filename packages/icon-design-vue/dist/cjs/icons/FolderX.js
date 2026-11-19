'use strict';

const { defineComponent, h } = require('vue');

const FolderX = defineComponent({
  name: 'FolderX',
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
          h('path', {"d":"M12.999999978690539,20.999999999998181H3.99999995789949c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h3.929630589660519c.668705935499929,0,1.293168239900297.334201833509724,1.664099899289795.890598573469106l.812536329350223,1.218802853061788c.370931659389498.556396739959382.995393963789866.890598573469106,1.664099899289795.890598573469106h7.929633174780065c1.104569483930391,0,1.999999977750122.895430475789908,2,1.999999959721208l.000000100710167,5.000000040278792"}),
          h('line', {"x1":"16.999999978690539","y1":"16.999999999998181","x2":"21.999999978690539","y2":"21.999999999998181"}),
          h('line', {"x1":"21.999999978690539","y1":"16.999999999998181","x2":"16.999999978690539","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = FolderX;
module.exports.FolderX = FolderX;
module.exports.default = FolderX;
