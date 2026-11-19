import { defineComponent, h } from 'vue';

const LaptopBagCenterFlat = defineComponent({
  name: 'LaptopBagCenterFlat',
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
          h('rect', {"x":"3.050537117662316","y":"1.998782732995096","width":"18","height":"16","rx":"1","ry":"1"}),
          h('line', {"x1":"2.050537117662316","y1":"21.998782732995096","x2":"22.050537117662316","y2":"21.998782732995096"}),
          h('rect', {"x":"7.050537117662316","y":"7.998782732995096","width":"10","height":"6","rx":"1","ry":"1"}),
          h('path', {"d":"M14.050537117662316,8.998782732995096v-2.000002000000677c0-1.10456839509061-.895429604910532-1.999997999999323-1.999997999999323-1.999997999999323h-.000004000001354c-1.104568395088791,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v2.000002000000677"})
        ]
      );
  }
});

export default LaptopBagCenterFlat;
export { LaptopBagCenterFlat };
