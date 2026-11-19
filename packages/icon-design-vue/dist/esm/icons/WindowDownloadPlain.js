import { defineComponent, h } from 'vue';

const WindowDownloadPlain = defineComponent({
  name: 'WindowDownloadPlain',
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
          h('path', {"d":"M11.999999993611709,21.998779299956368H3.9999999935917c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v8"}),
          h('line', {"x1":"1.9999999935917","y1":"7.998779299956368","x2":"21.9999999935917","y2":"7.998779299956368"}),
          h('polyline', {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368"}),
          h('line', {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368"})
        ]
      );
  }
});

export default WindowDownloadPlain;
export { WindowDownloadPlain };
