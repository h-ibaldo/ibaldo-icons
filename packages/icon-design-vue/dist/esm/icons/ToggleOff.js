import { defineComponent, h } from 'vue';

const ToggleOff = defineComponent({
  name: 'ToggleOff',
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
          h('rect', {"x":"1.999999988020136","y":"5.999996563894001","width":"20","height":"12.000000004577942","rx":"5.99999401221545","ry":"5.99999401221545"}),
          h('path', {"d":"M7.999999977100742,5.999996563434252c3.313708498799315,0,6,2.686291501202504,6,6,0,3.313708498801134-2.686291501200685,6-6,6"})
        ]
      );
  }
});

export default ToggleOff;
export { ToggleOff };
