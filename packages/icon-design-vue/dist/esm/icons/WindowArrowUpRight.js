import { defineComponent, h } from 'vue';

const WindowArrowUpRight = defineComponent({
  name: 'WindowArrowUpRight',
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
          h('path', {"d":"M2.000000004900357,15.999999995256076V3.999999995616236c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-12"}),
          h('line', {"x1":"2.000000004900357","y1":"7.999999995616236","x2":"22.000000004900357","y2":"7.999999995616236"}),
          h('line', {"x1":"5.010000004900576","y1":"4.999999995616236","x2":"5.000000004900357","y2":"4.999999995616236"}),
          h('line', {"x1":"8.010000004900576","y1":"4.999999995616236","x2":"8.000000004900357","y2":"4.999999995616236"}),
          h('line', {"x1":"11.010000004900576","y1":"4.999999995616236","x2":"11.000000004900357","y2":"4.999999995616236"}),
          h('polyline', {"points":"11.000000004900357 17.999999995256076 11.000000004900357 12.999999995256076 6.000000004900357 12.999999995256076"}),
          h('line', {"x1":"11.000000004900357","y1":"12.999999995256076","x2":"2.000000004900357","y2":"21.999999995256076"})
        ]
      );
  }
});

export default WindowArrowUpRight;
export { WindowArrowUpRight };
