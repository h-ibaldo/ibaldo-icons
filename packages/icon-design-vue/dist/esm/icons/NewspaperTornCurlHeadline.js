import { defineComponent, h } from 'vue';

const NewspaperTornCurlHeadline = defineComponent({
  name: 'NewspaperTornCurlHeadline',
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
          h('path', {"d":"M21.999988017749274,21.936828613277612H7.82841514249958c-.530432979679972,0-1.039140805480201-.210713680728077-1.414213562378791-.585786437630304l-3.828427124741211-3.828427124739392c-.375072756900408-.375072756898589-.585786437630304-.883780582698819-.585786437630304-1.414213562369696V1.936828613277612l2,1,2-1,2,1,2-1,2,1,2.00000313531018-1,1.999996798711436,1,2.000000032989192-1,1.999999967010808,1,2-1,.000000065978384,20Z"}),
          h('line', {"x1":"11.999988017749274","y1":"13.936828613277612","x2":"17.999987951770891","y2":"13.936828613277612"}),
          h('line', {"x1":"11.999988017749274","y1":"17.936828613277612","x2":"17.999987951770891","y2":"17.936828613277612"}),
          h('polyline', {"points":"1.999988017749274 15.936828613277612 7.999988017749274 15.936828613277612 7.999988017749274 21.936828613277612"}),
          h('rect', {"x":"5.999988017749274","y":"6.936828613277612","width":"12","height":"3"})
        ]
      );
  }
});

export default NewspaperTornCurlHeadline;
export { NewspaperTornCurlHeadline };
