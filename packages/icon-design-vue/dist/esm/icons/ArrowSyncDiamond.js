import { defineComponent, h } from 'vue';

const ArrowSyncDiamond = defineComponent({
  name: 'ArrowSyncDiamond',
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
          h('polyline', {"points":"22 11 19.99999999981992 12.999999999818101 18 10.999999999648935"}),
          h('path', {"d":"M20.00000000027012,12.999999999199645v-4.000076293950769c0-.629514606669545-.296388314670367-1.222291235998455-.800000000000182-1.599999999999454l-5.999967575099618-4.499975681320393c-.711112919550033-.533334689669573-1.688893590830048-.533333197699903-2.400004882780195.000003662089512l-5.800027542120006,4.350048313181105"}),
          h('polyline', {"points":"2.00000000036016 12.999999998210114 4.00000000072032 10.999999998568455 6.00000000036016 12.99999999891952"}),
          h('path', {"d":"M4.00000000027012,10.999999999199645l-.00000000036016,4.000076293938037c-.000000000060027.629514606671364.296388314560318,1.222291236030287.79999999986012,1.600000000071304l5.999967574689435,4.499975681859723c.71111291950001.5333346897296,1.688893590780935.533333197849061,2.400004882780195-.000003661869414l5.800027542510179-4.350048312660874"})
        ]
      );
  }
});

export default ArrowSyncDiamond;
export { ArrowSyncDiamond };
