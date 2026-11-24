import { defineComponent, h } from 'vue';

const SquareStackPlusCircle = defineComponent({
  name: 'SquareStackPlusCircle',
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
          h('path', {"d":"M9.999999993639904,21.997565472713177h-1c-1.104569499660101,0-2-.895430500338989-2-2v-11c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v1"}),
          h('circle', {"cx":"16.999999993639904","cy":"16.997565472713177","r":"5"}),
          h('g', {}, [
            h('line', {"x1":"16.999999993639904","y1":"14.997565472713177","x2":"16.999999993639904","y2":"18.997565472713177"}),
            h('line', {"x1":"18.999999993639904","y1":"16.997565472622227","x2":"14.999999993639904","y2":"16.997565472801398"})
          ]),
          h('path', {"d":"M6.999999993639904,16.997565472713177h-3c-1.104569499660101,0-2-.895430500338989-2-2V3.997565472713177c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v3"})
        ]
      );
  }
});

export default SquareStackPlusCircle;
export { SquareStackPlusCircle };
