import { defineComponent, h } from 'vue';

const DashboardSharp = defineComponent({
  name: 'DashboardSharp',
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
          h('rect', {"x":"3.000000001580702","y":"12.00000002768229","width":"7","height":"9"}),
          h('rect', {"x":"13.999999990799552","y":"3.00000002768229","width":"7","height":"9"}),
          h('rect', {"x":"13.999999990799552","y":"16.00000002768229","width":"7","height":"5"}),
          h('rect', {"x":"3.000000001580702","y":"3.00000002768229","width":"7","height":"5"})
        ]
      );
  }
});

export default DashboardSharp;
export { DashboardSharp };
