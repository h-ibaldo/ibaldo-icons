import { defineComponent, h } from 'vue';

const ArrowSyncClockwiseOff = defineComponent({
  name: 'ArrowSyncClockwiseOff',
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
          h('polyline', {"points":"22.000000000411092 11.000000000489308 20.000000000229193 13.000000000309228 18.000000000411092 11.000000000129148"}),
          h('line', {"x1":"19","y1":"2","x2":"5","y2":"22"}),
          h('g', {}, [
            h('path', {"d":"M20,12c0-2.711181640621362-1.35205078125-5.10302734375-3.4150390625-6.549926757810681"}),
            h('path', {"d":"M12.865966796875,4.048583984378638c-.28466796875-.030517578128638-.573120117188409-.048583984378638-.865966796875-.048583984378638-2.62811279296875,0-4.96026611328125,1.267333984378638-6.418701171875,3.22412109375"})
          ]),
          h('polyline', {"points":"2 12.999999999508873 4.000000000181899 10.999999999688953 6 12.999999999869033"}),
          h('g', {}, [
            h('path', {"d":"M4.000000000411092,12c0,2.711181640628638,1.35205078125,5.10302734375,3.4150390625,6.549926757808862"}),
            h('path', {"d":"M11.134033203536092,19.951416015628638c.28466796875.030517578121362.5731201171875.048583984371362.865966796875.048583984371362,2.628112792970569,0,4.96026611328125-1.267333984371362,6.418701171875-3.22412109375"})
          ])
        ]
      );
  }
});

export default ArrowSyncClockwiseOff;
export { ArrowSyncClockwiseOff };
