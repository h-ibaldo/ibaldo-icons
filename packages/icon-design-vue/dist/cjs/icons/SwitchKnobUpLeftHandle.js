'use strict';

const { defineComponent, h } = require('vue');

const SwitchKnobUpLeftHandle = defineComponent({
  name: 'SwitchKnobUpLeftHandle',
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
          h('rect', {"x":"5.403805899489443","y":"3.903802485621076","width":"3.999999999998746","height":"8.999999999999591","rx":".999999999995024","ry":".999999999995024","transform":"translate(-3.773861183947202 7.696698118144714) rotate(-44.999999998673502)"}),
          h('path', {"d":"M4.384964033622964,8.213387744424836c-2.189208464171315,3.476881677146594-1.776873369830355,8.12262156693032,1.251074912650438,11.150569849545718,3.514688411760289,3.514688411913085,9.213233649448739,3.514688412040414,12.727922061360005.000000000283762,3.514731570288859-3.51473157012515,3.514688412040414-9.213233649443282.000000000289219-12.727922061356367-3.027991440860205-3.027991440987535-7.673688172249967-3.440369693915272-11.150569849489329-1.251074913154298"})
        ]
      );
  }
});

module.exports = SwitchKnobUpLeftHandle;
module.exports.SwitchKnobUpLeftHandle = SwitchKnobUpLeftHandle;
module.exports.default = SwitchKnobUpLeftHandle;
