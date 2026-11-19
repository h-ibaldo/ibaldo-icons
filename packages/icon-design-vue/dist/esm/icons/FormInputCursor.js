import { defineComponent, h } from 'vue';

const FormInputCursor = defineComponent({
  name: 'FormInputCursor',
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
          h('path', {"d":"M22,18.999999999999091H4.160246899467893c-1.19307141844547,0-2.160246899467893-.967175481022423-2.160246899467893-2.160246899467893V7.160246899468802c0-1.19307141844547.967175481022423-2.160246899467893,2.160246899467893-2.160246899467893h17.839753100532107"}),
          h('polyline', {"points":"5.999999999978172 10.000000000044565 5.999999999978172 9.000000000044565 7.999999999978172 9.000000000044565"}),
          h('polyline', {"points":"12 10 11.999999999954525 9 9.999999999954525 9.00000000009004"}),
          h('line', {"x1":"9.000000000001819","y1":"10","x2":"9.000000000001819","y2":"14"}),
          h('line', {"x1":"10","y1":"15","x2":"11","y2":"15"}),
          h('line', {"x1":"7","y1":"15","x2":"8","y2":"15"}),
          h('line', {"x1":"15.000000000001819","y1":"15.000000000000909","x2":"15","y2":"14.990000000000691"}),
          h('line', {"x1":"19","y1":"14.990000000000691","x2":"18.999999999998181","y2":"15.000000000000909"})
        ]
      );
  }
});

export default FormInputCursor;
export { FormInputCursor };
