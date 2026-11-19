import { defineComponent, h } from 'vue';

const PanelRight = defineComponent({
  name: 'PanelRight',
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
          h('rect', {"x":"2.050537047695798","y":"1.997697219531801","width":"20","height":"19.999864816289119","rx":"1.999999999971351","ry":"1.999999999971351"}),
          h('polyline', {"points":"22.050450129007004 5.997562036226554 17.050450129007004 5.997562036001 17.050450128646844 17.997426743359938 22.050450128646844 17.997426743585493"})
        ]
      );
  }
});

export default PanelRight;
export { PanelRight };
