import { defineComponent, h } from 'vue';

const XCircleLarge = defineComponent({
  name: 'XCircleLarge',
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
          h('line', {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990610377","y2":"8.00000000107957"}),
          h('line', {"x1":"15.999999990430297","y1":"16.000000000894943","x2":"7.999999991150617","y2":"8.0000000009004"}),
          h('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10"})
        ]
      );
  }
});

export default XCircleLarge;
export { XCircleLarge };
