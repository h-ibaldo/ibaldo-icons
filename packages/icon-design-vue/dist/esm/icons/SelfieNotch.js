import { defineComponent, h } from 'vue';

const SelfieNotch = defineComponent({
  name: 'SelfieNotch',
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
          h('rect', {"x":"2.000783849076015","y":"5.000487245899876","width":"19.999999999998181","height":"13.999509314450734","rx":"2.160209041922921","ry":"2.160209041922921","transform":"translate(24.001025752826855 -.000541945323386) rotate(90.000000002991143)"}),
          h('polyline', {"points":"10.000889693819772 1.99975122135038 10.000889693719728 3.99975122135038 13.9996227563297 3.999751221528641 13.999622756420649 1.999751221528641"}),
          h('circle', {"cx":"12.001029198860124","cy":"10.499996564258254","r":"2.5"}),
          h('path', {"d":"M15.001029198860124,17.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407359432-2.999996999998984-2.999997000000803-2.999996999998984h-.000005999998393c-1.656852592630457,0-2.999997000000803,1.343144407361251-2.999997000000803,2.999996999998984v2.000003000001016"})
        ]
      );
  }
});

export default SelfieNotch;
export { SelfieNotch };
