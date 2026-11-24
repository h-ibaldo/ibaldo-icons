import { defineComponent, h } from 'vue';

const DashboardTrendUpPie = defineComponent({
  name: 'DashboardTrendUpPie',
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
          h('path', {"d":"M14 16C14 12.688 11.313 10 8 10C4.688 10 2 12.688 2 16C2 19.313 4.688 22 8 22C11.313 22 14 19.313 14 16Z"}),
          h('path', {"d":"M8 10L8 16L14 16"}),
          h('path', {"d":"M18 12L22 12"}),
          h('path', {"d":"M18 16L22 16"}),
          h('path', {"d":"M18 20L22 20"}),
          h('path', {"d":"M2 7L10 3L17 7L22 2"}),
          h('path', {"d":"M18 2L22 2L22 6"})
        ]
      );
  }
});

export default DashboardTrendUpPie;
export { DashboardTrendUpPie };
