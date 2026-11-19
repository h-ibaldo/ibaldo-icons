import { defineComponent, h } from 'vue';

const WindowXCenter = defineComponent({
  name: 'WindowXCenter',
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
          h('g', {}, [
            h('line', {"x1":"13.999999993633537","y1":"12.998779299956368","x2":"9.999999993633537","y2":"16.998779299956368"}),
            h('line', {"x1":"13.999999993633537","y1":"16.998779299956368","x2":"9.999999993633537","y2":"12.998779299956368"})
          ]),
          h('rect', {"x":"1.999999993633537","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"1.999999993633537","y1":"7.998779299956368","x2":"21.999999993633537","y2":"7.998779299956368"}),
          h('line', {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368"}),
          h('line', {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368"}),
          h('line', {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368"})
        ]
      );
  }
});

export default WindowXCenter;
export { WindowXCenter };
