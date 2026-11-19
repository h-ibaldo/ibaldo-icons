import { defineComponent, h } from 'vue';

const Scanner = defineComponent({
  name: 'Scanner',
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
          h('rect', {"x":"1.999999981189831","y":"12.999996564258254","width":"20","height":"6"}),
          h('path', {"d":"M20.999999981180736,18.999996564258254v2c0,.552284749828686-.503679656439999,1-1.125,1H4.124999981189831c-.621320343560001,0-1.125-.447715250171314-1.125-1v-2"}),
          h('line', {"x1":"4.999999981189831","y1":"15.999996564258254","x2":"5.999999981189831","y2":"15.999996564258254"}),
          h('line', {"x1":"5.999999981189831","y1":"1.999996564258254","x2":"21.999999981189831","y2":"12.999996564258254"})
        ]
      );
  }
});

export default Scanner;
export { Scanner };
