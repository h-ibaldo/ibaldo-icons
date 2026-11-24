import { defineComponent, h } from 'vue';

const TouchSwipeLeftSquare = defineComponent({
  name: 'TouchSwipeLeftSquare',
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
          h('polyline', {"points":"4.999999993642632 14.998779299956368 1.999999993642632 11.998779299956368 4.999999993642632 8.998779299956368"}),
          h('line', {"x1":"9.999999993642632","y1":"11.998779299956368","x2":"1.999999993642632","y2":"11.998779299956368"}),
          h('circle', {"cx":"13.999999993642632","cy":"11.998779299956368","r":"4"}),
          h('path', {"d":"M1.999999993642632,16.99877929968352v3c0,1.104569499661011.895430500340808,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2V3.99877929968352c0-1.104569499661011-.895430500338989-2-2-2H3.999999993642632c-1.104569499659192,0-2,.895430500338989-2,2v3"})
        ]
      );
  }
});

export default TouchSwipeLeftSquare;
export { TouchSwipeLeftSquare };
