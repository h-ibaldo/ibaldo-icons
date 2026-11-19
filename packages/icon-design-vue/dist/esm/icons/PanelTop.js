import { defineComponent, h } from 'vue';

const PanelTop = defineComponent({
  name: 'PanelTop',
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
          h('rect', {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.000000000000773","ry":"2.000000000000773","transform":"translate(24.10107409599652 23.995259254746493) rotate(180)"}),
          h('polyline', {"points":"6.050537043436634 1.997697235342457 6.050537043436634 6.997697235342457 18.050537043436634 6.997697235342457 18.050537043436634 1.997697235342457"})
        ]
      );
  }
});

export default PanelTop;
export { PanelTop };
