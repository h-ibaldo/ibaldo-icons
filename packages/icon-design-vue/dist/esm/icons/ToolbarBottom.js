import { defineComponent, h } from 'vue';

const ToolbarBottom = defineComponent({
  name: 'ToolbarBottom',
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
          h('rect', {"x":"2.050537047695798","y":"2.997697235746273","width":"20","height":"17.999864816290938","rx":".999999999999596","ry":".999999999999596","transform":"translate(24.101074094785382 23.995259288392372) rotate(-180)"}),
          h('line', {"x1":"2.050537039165647","y1":"14.997562036226554","x2":"22.050537039165647","y2":"14.997562036226554"}),
          h('line', {"x1":"11.050537039165647","y1":"17.997562036226554","x2":"19.050537039165647","y2":"17.997562036226554"}),
          h('line', {"x1":"5.060537039165865","y1":"17.997562036226554","x2":"5.050537039165647","y2":"17.997562036226554"}),
          h('line', {"x1":"8.060537039165865","y1":"17.997562036226554","x2":"8.050537039165647","y2":"17.997562036226554"})
        ]
      );
  }
});

export default ToolbarBottom;
export { ToolbarBottom };
