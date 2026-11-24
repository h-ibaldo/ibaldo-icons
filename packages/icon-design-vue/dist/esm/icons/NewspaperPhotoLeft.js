import { defineComponent, h } from 'vue';

const NewspaperPhotoLeft = defineComponent({
  name: 'NewspaperPhotoLeft',
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
          h('path', {"d":"M4.999988017749274,3.936828613277612h17v15c0,.552284749830505-.447715250169495,1-1,1H3.499988017749274"}),
          h('path', {"d":"M4.999988017749274,5.936828613277612H1.999988017749274v12.500001500000508c0,.828426296320686.671572203671531,1.499998499999492,1.499998500001311,1.499998499999492h.000002999999197c.828426296320686,0,1.499998499999492-.671572203678807,1.499998499999492-1.499998499999492V3.936828613277612"}),
          h('rect', {"x":"7.999988017749274","y":"7.936828613277612","width":"4","height":"4"}),
          h('line', {"x1":"14.999988017749274","y1":"7.936828613277612","x2":"18.999988017749274","y2":"7.936828613277612"}),
          h('line', {"x1":"14.999988017749274","y1":"11.936828613277612","x2":"18.999988017749274","y2":"11.936828613277612"}),
          h('line', {"x1":"14.999988017749274","y1":"15.936828613277612","x2":"18.999988017749274","y2":"15.936828613277612"}),
          h('line', {"x1":"7.999988017749274","y1":"15.936828613277612","x2":"11.999988017749274","y2":"15.936828613277612"})
        ]
      );
  }
});

export default NewspaperPhotoLeft;
export { NewspaperPhotoLeft };
