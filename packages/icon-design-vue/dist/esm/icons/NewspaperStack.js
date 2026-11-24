import { defineComponent, h } from 'vue';

const NewspaperStack = defineComponent({
  name: 'NewspaperStack',
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
          h('path', {"d":"M18.999988017745636,21.936828613219404H4.99998794023486c-1.656854249489697,0-3-1.343145750501208-3-3V1.936828613219404h14.000000077510776"}),
          h('path', {"d":"M21.9999879403058,7.936828613277612l.000000019030267,11.000003024440957c.00000000262844,1.65685257836958-1.343144392430986,2.999996975559043-2.999996970791472,2.999996975559043h-.000005999998393c-1.656852576510573,0-2.999996970800566-1.343144394289993-2.999996970800566-2.999996970800566V1.936828613219404"}),
          h('rect', {"x":"5.99998794023486","y":"5.936828613219404","width":"6.000000077510776","height":"4"}),
          h('line', {"x1":"5.99998794023486","y1":"13.936828613219404","x2":"11.999988017745636","y2":"13.936828613219404"}),
          h('line', {"x1":"5.99998794023486","y1":"17.936828613219404","x2":"11.999988017745636","y2":"17.936828613219404"}),
          h('line', {"x1":"18.999988017745636","y1":"4.936828613228499","x2":"18.999988017745636","y2":"18.936828613277612"})
        ]
      );
  }
});

export default NewspaperStack;
export { NewspaperStack };
