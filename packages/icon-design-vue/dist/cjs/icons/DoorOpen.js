'use strict';

const { defineComponent, h } = require('vue');

const DoorOpen = defineComponent({
  name: 'DoorOpen',
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
          h('path', {"d":"M3.974731450043691,18.000000000481123V3.000000000479304c0-.552284749830505.447715250171314-1,1-1h14c.552284749833234,0,1,.447715250169495,1,1v14.000000000001819c0,.552284749828686-.447715250166766,1-1,1h-6"}),
          h('path', {"d":"M3.974731450043691,18.000000000481123l8.296930766973674,3.68752478532133c.330643698467611.146952754875201.703069233026326-.095076577726104.703069233026326-.456905774311053V6.324936545025594c0-.197594358243805-.116366760468736-.376655104755628-.296930766972764-.456905774311053L4.41308594223392,2.194824219231123"})
        ]
      );
  }
});

module.exports = DoorOpen;
module.exports.DoorOpen = DoorOpen;
module.exports.default = DoorOpen;
