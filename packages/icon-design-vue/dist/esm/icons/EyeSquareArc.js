import { defineComponent, h } from 'vue';

const EyeSquareArc = defineComponent({
  name: 'EyeSquareArc',
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
          h('rect', {"x":"1.999999975221726","y":"2.999996561106855","width":"20","height":"18.000135182977829","rx":"1.999999999975317","ry":"1.999999999975317","transform":"translate(23.999999950865007 24.000128304769987) rotate(180)"}),
          h('path', {"d":"M11.999999972062142,9.999996564601133c-1.104569499599165,0-2,.895430500400835-2,2s.895430500400835,2,2,2c1.104569499600984,0,2-.895430500400835,2-2"}),
          h('path', {"d":"M11.999999972062142,6.999996564601133c-3.53173828125,0-6.57977294921875,2.03924560546875-8.05340576171875,5,1.4736328125,2.96075439453125,4.52166748046875,5,8.05340576171875,5s6.579772949220569-2.03924560546875,8.053405761720569-5c-1.4736328125-2.96075439453125-4.521667480470569-5-8.053405761720569-5Z"})
        ]
      );
  }
});

export default EyeSquareArc;
export { EyeSquareArc };
