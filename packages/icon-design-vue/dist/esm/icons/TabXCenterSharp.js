import { defineComponent, h } from 'vue';

const TabXCenterSharp = defineComponent({
  name: 'TabXCenterSharp',
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
          h('polygon', {"points":"22.025268532079281 21.998779297172405 2.025268532079281 21.998779297172405 2.025268532079281 1.998779297172405 10.025268532079281 1.998779297172405 13.025268532079281 5.998779297172405 22.025268532079281 5.998779297172405 22.025268532079281 21.998779297172405"}),
          h('polyline', {"points":"15.025268532079281 1.998779297172405 22.025268532079281 1.998779297172405 22.025268532079281 5.998779297172405"}),
          h('line', {"x1":"15.025268532079281","y1":"16.998779297172405","x2":"9.025268532079281","y2":"10.998779297172405"}),
          h('line', {"x1":"15.025268532079281","y1":"10.998779297172405","x2":"9.025268532079281","y2":"16.998779297172405"})
        ]
      );
  }
});

export default TabXCenterSharp;
export { TabXCenterSharp };
