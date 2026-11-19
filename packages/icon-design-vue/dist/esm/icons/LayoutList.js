import { defineComponent, h } from 'vue';

const LayoutList = defineComponent({
  name: 'LayoutList',
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
          h('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1"}),
          h('line', {"x1":"13.999999994000973","y1":"5.998779299956368","x2":"21.999999994000973","y2":"5.998779299956368"}),
          h('line', {"x1":"13.999999994000973","y1":"17.998779299956368","x2":"21.999999994000973","y2":"17.998779299956368"}),
          h('rect', {"x":"4.999999994000973","y":"4.998779299956368","width":"2","height":"2"}),
          h('rect', {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"4.999999994000973","y":"16.998779299956368","width":"2","height":"2"})
        ]
      );
  }
});

export default LayoutList;
export { LayoutList };
