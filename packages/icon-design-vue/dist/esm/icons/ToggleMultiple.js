import { defineComponent, h } from 'vue';

const ToggleMultiple = defineComponent({
  name: 'ToggleMultiple',
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
          h('rect', {"x":"1.999999987987565","y":"1.999996567183956","width":"20.000000000032401","height":"7.999999993301515","rx":"3.999996000590027","ry":"3.999996000590027"}),
          h('path', {"d":"M17.999999557170668,9.999996563434252c-2.209136785710143.000000002000888-3.999995992890035-1.79085920372745-3.99999599270086-3.999995989430317v-.000008023842383c.000000000200089-2.209136785699229,1.790859207711037-3.999995991103788,3.999995993399352-3.999995988713636"}),
          h('rect', {"x":"1.999999988020022","y":"13.999996562083609","width":"19.999999999967486","height":"8.00000000347913","rx":"3.999995977250226","ry":"3.999995977250226","transform":"translate(23.999999986631632 35.999993120563616) rotate(180)"}),
          h('path', {"d":"M6.000000397390977,13.999996559832653c2.209136785699229-.0000000018008,3.999995992729964,1.790859204083972,3.999995992329787,3.999995989786839v.000008023846021c-.000000000391083,2.209136785695591-1.790859208060283,3.999995990940079-3.999995993750417,3.999995988357114"})
        ]
      );
  }
});

export default ToggleMultiple;
export { ToggleMultiple };
