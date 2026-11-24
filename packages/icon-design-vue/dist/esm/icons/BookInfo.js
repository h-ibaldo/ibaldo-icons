import { defineComponent, h } from 'vue';

const BookInfo = defineComponent({
  name: 'BookInfo',
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
          h('path', {"d":"M19,17H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354c0,1.10456839509061.895429604909623,1.999997999999323,1.999997999999323,1.999997999999323h12.000002000000677"}),
          h('path', {"d":"M19,17V3H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354"}),
          h('line', {"x1":"5","y1":"5","x2":"5","y2":"19"}),
          h('line', {"x1":"12.025268548599342","y1":"6.988779303362207","x2":"12.025268548599342","y2":"6.998779303362426"}),
          h('line', {"x1":"12","y1":"10","x2":"12","y2":"13"})
        ]
      );
  }
});

export default BookInfo;
export { BookInfo };
