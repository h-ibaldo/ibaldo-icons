import { defineComponent, h } from 'vue';

const MobileCubeOverlap = defineComponent({
  name: 'MobileCubeOverlap',
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
          h('rect', {"x":"9.000000002679371","y":"2.0000000168111","width":"12.00000000894579","height":"20","rx":"1.999999999998105","ry":"1.999999999998105"}),
          h('polygon', {"points":"8.999999999599822 11.999999999326974 15 9 9.000000000411092 5.999999999326974 3 8.999999998653948 8.999999999599822 11.999999999326974"}),
          h('polyline', {"points":"3 8.999999998653948 2.99999999937063 14.999999998653948 8.999999998970452 17.999999999326974 14.99999999937063 15 15 9"}),
          h('polyline', {"points":"13.000000001149601 1.999999998068233 13.000000001060471 2.999999998068233 17.000000001060471 2.999999998606654 17.000000001149601 1.999999998606654"})
        ]
      );
  }
});

export default MobileCubeOverlap;
export { MobileCubeOverlap };
