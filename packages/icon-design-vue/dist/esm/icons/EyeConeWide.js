import { defineComponent, h } from 'vue';

const EyeConeWide = defineComponent({
  name: 'EyeConeWide',
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
          h('ellipse', {"cx":"12.000000003157766","cy":"18.998782736171052","rx":"10","ry":"3"}),
          h('circle', {"cx":"12.000000003157766","cy":"5.998782736171052","r":"4"}),
          h('path', {"d":"M21.000000003157766,5.456668478358552c-2.3896484375-2.14312744140625-5.537353515617724-3.4578857421875-9-3.4578857421875-3.462646484367724,0-6.6103515625,1.31475830078125-9,3.4578857421875"}),
          h('line', {"x1":"12.000000003157766","y1":"6.00878273617127","x2":"12.000000003157766","y2":"5.998782736171052"}),
          h('path', {"d":"M2.000000003157766,18.998782736171052v-.2917960675004c0-.465735285863047.108435275262309-.925074483013304.316718427002343-1.341640786500648l5.683281572997657-11.366563145998953"}),
          h('path', {"d":"M16.000000003157766,5.998782736171052l5.683281573001295,11.366563145998953c.208283151740034.416566303487343.316718426998705.8759055006376.316718426998705,1.341640786500648v.2917960675004"})
        ]
      );
  }
});

export default EyeConeWide;
export { EyeConeWide };
