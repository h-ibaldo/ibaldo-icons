import { defineComponent, h } from 'vue';

const NewspaperTornWide = defineComponent({
  name: 'NewspaperTornWide',
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
          h('polygon', {"points":"21.999988083716744 21.936828613277612 1.999988083716744 21.936828613277612 1.999988083716744 1.936828613277612 3.999988083716744 2.936828613277612 5.999988083716744 1.936828613277612 7.999988083716744 2.936828613277612 9.999988083716744 1.936828613277612 11.999988083716744 2.936828613277612 13.999991219036019 1.936828613277612 15.999988017745636 2.936828613277612 17.999988050734828 1.936828613277612 19.999988017745636 2.936828613277612 21.999988017745636 1.936828613277612 21.999988083716744 21.936828613277612"}),
          h('rect', {"x":"5.999988017745636","y":"6.936828613277612","width":"12","height":"3"}),
          h('line', {"x1":"13.999988017745636","y1":"13.936828613277612","x2":"17.999988017745636","y2":"13.936828613277612"}),
          h('line', {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"9.999988017745636","y2":"13.936828613277612"}),
          h('line', {"x1":"13.999988017745636","y1":"17.936828613277612","x2":"17.999988017745636","y2":"17.936828613277612"}),
          h('line', {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"9.999988017745636","y2":"17.936828613277612"})
        ]
      );
  }
});

export default NewspaperTornWide;
export { NewspaperTornWide };
