import { defineComponent, h } from 'vue';

const DashboardSquare = defineComponent({
  name: 'DashboardSquare',
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
          h('rect', {"x":"2.999999990799552","y":"2.000000000448381","width":"18","height":"20"}),
          h('line', {"x1":"12.000000015979822","y1":"2.000000000448381","x2":"12.000000015979822","y2":"22.000000000448381"}),
          h('line', {"x1":"2.999999990799552","y1":"9.000000000448381","x2":"12.000000015979822","y2":"9.000000000448381"}),
          h('line', {"x1":"12.000000015979822","y1":"15.000000000448381","x2":"20.999999990799552","y2":"15.000000000448381"})
        ]
      );
  }
});

export default DashboardSquare;
export { DashboardSquare };
