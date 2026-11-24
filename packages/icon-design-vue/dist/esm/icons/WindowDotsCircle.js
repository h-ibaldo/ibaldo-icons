import { defineComponent, h } from 'vue';

const WindowDotsCircle = defineComponent({
  name: 'WindowDotsCircle',
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
          h('path', {"d":"M10.000000000183718,22.000000000448381h-6c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v6"}),
          h('line', {"x1":"2.000000000183718","y1":"8.000000000448381","x2":"22.000000000183718","y2":"8.000000000448381"}),
          h('circle', {"cx":"17.000000000183718","cy":"17.000000000448381","r":"5"}),
          h('line', {"x1":"15.500000000183718","y1":"17.00000000035925","x2":"15.510000000183936","y2":"17.000000000538421"}),
          h('line', {"x1":"18.500000000183718","y1":"17.00000000035925","x2":"18.510000000183936","y2":"17.000000000538421"}),
          h('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381"})
        ]
      );
  }
});

export default WindowDotsCircle;
export { WindowDotsCircle };
