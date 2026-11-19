import { defineComponent, h } from 'vue';

const ClockEye = defineComponent({
  name: 'ClockEye',
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
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('path', {"d":"M8,14.999999999887223c-2.420349121090112,0-4.500549316409888,1.43603515625-5.44921875,3.5.948669433590112,2.06396484375,3.028869628909888,3.5,5.44921875,3.5s4.500549316409888-1.43603515625,5.44921875-3.5c-.948669433590112-2.06396484375-3.028869628909888-3.5-5.44921875-3.5Z"}),
          h('circle', {"cx":"8","cy":"18.499999999887223","r":".5"}),
          h('path', {"d":"M17,20.651245117078361c2.986145019529431-1.729858398441138,5-4.952026367191138,5-8.651245117191138,0-5.522827148439319-4.477111816409888-10-10-10C6.477172851560681,1.999999999887223,2,6.477172851447904,2,11.999999999887223c0,.337646484371362.017822265630457.671020507810681.050476074220569,1"})
        ]
      );
  }
});

export default ClockEye;
export { ClockEye };
