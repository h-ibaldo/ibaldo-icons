import { defineComponent, h } from 'vue';

const BriefcaseBeltBroken = defineComponent({
  name: 'BriefcaseBeltBroken',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1"}),
          h('path', {"d":"M7.999998360470272,15.999999999998181h-3.58476890277052c-1.333894396830146,0-2.415229457699752-1.081335060869606-2.415229457699752-2.415229457699752"}),
          h('path', {"d":"M22,13.584770542298429c0,1.333894396830146-1.081335060860511,2.415229457699752-2.415229457699752,2.415229457699752h-3.584770073650361"}),
          h('path', {"d":"M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2"}),
          h('line', {"x1":"12","y1":"14.999999999998181","x2":"12","y2":"16.999999999998181"})
        ]
      );
  }
});

export default BriefcaseBeltBroken;
export { BriefcaseBeltBroken };
