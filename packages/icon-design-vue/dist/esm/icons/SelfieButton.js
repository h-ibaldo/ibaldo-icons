import { defineComponent, h } from 'vue';

const SelfieButton = defineComponent({
  name: 'SelfieButton',
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
          h('rect', {"x":"2.000538506249995","y":"4.999505874995066","width":"20","height":"14.000981371279522","rx":"2.160322612580833","ry":"2.160322612580833","transform":"translate(.000541944988678 24.000535066258358) rotate(-89.999999997008871)"}),
          h('polyline', {"points":"13.000538512780622 21.99999656430191 13.000538512869753 19.99999656430191 11.000538512869753 19.99999656421096 11.000538512780622 21.99999656421096"}),
          h('circle', {"cx":"12.001029198860124","cy":"8.499996564258254","r":"2.5"}),
          h('path', {"d":"M15.001029198860124,15.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407359432-2.999996999998984-2.999997000000803-2.999996999998984h-.000005999998393c-1.656852592630457,0-2.999997000000803,1.343144407361251-2.999997000000803,2.999996999998984v2.000003000001016"})
        ]
      );
  }
});

export default SelfieButton;
export { SelfieButton };
