import { defineComponent, h } from 'vue';

const NewspaperCard = defineComponent({
  name: 'NewspaperCard',
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
          h('rect', {"x":"5.999987951774528","y":"5.936828613277612","width":"4.000000065971108","height":"4"}),
          h('line', {"x1":"13.999988017745636","y1":"5.936828613277612","x2":"17.999987951774528","y2":"5.936828613277612"}),
          h('line', {"x1":"13.999988017745636","y1":"9.936828613277612","x2":"17.999987951774528","y2":"9.936828613277612"}),
          h('line', {"x1":"13.999987951774528","y1":"13.936828613277612","x2":"17.999987951774528","y2":"13.936828613277612"}),
          h('line', {"x1":"5.999987951774528","y1":"13.936828613277612","x2":"9.999987951774528","y2":"13.936828613277612"}),
          h('line', {"x1":"13.999987951774528","y1":"17.936828613277612","x2":"17.999987951774528","y2":"17.936828613277612"}),
          h('line', {"x1":"5.999987951774528","y1":"17.936828613277612","x2":"9.999987951774528","y2":"17.936828613277612"}),
          h('rect', {"x":"1.999988017745636","y":"1.936828613277612","width":"19.999999934028892","height":"20","rx":"2","ry":"2"})
        ]
      );
  }
});

export default NewspaperCard;
export { NewspaperCard };
