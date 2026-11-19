import { defineComponent, h } from 'vue';

const AntennaTop = defineComponent({
  name: 'AntennaTop',
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
          h('circle', {"cx":"12.000000000029104","cy":"11.999999999979991","r":"2"}),
          h('path', {"d":"M18.000000000029104,11.999999999979991c0-3.313708498797496-2.686291501198866-6-6-6-3.313708498799315,0-6,2.686291501202504-6,6"}),
          h('path', {"d":"M22.000000000029104,11.999999999979991c0-5.522847497995826-4.477152501998717-10.000000000003638-10-10.000000000003638C6.477152502029639,1.999999999976353,2.000000000029104,6.477152501984165,2.000000000029104,11.999999999979991"}),
          h('line', {"x1":"16.000000000029104","y1":"21.999999999979991","x2":"12.741699218779104","y2":"13.854248046854991"}),
          h('line', {"x1":"11.258300781279104","y1":"13.854248046854991","x2":"8.000000000029104","y2":"21.999999999979991"})
        ]
      );
  }
});

export default AntennaTop;
export { AntennaTop };
