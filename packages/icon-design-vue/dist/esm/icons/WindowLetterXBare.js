import { defineComponent, h } from 'vue';

const WindowLetterXBare = defineComponent({
  name: 'WindowLetterXBare',
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
          h('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"2.000000000000045","ry":"2.000000000000045"}),
          h('line', {"x1":"14.00000000018008","y1":"11.000000000448381","x2":"10.00000000018008","y2":"17.000000000448381"}),
          h('line', {"x1":"10.000000000050932","y1":"11.000000000561158","x2":"14.000000000309228","y2":"17.000000000337423"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowLetterXBare;
export { WindowLetterXBare };
