import { defineComponent, h } from 'vue';

const DashboardPieTrendUp = defineComponent({
  name: 'DashboardPieTrendUp',
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
          h('path', {"d":"M14 8C14 4.688 11.313 2 8 2C4.688 2 2 4.688 2 8C2 11.313 4.688 14 8 14C11.313 14 14 11.313 14 8Z"}),
          h('path', {"d":"M8 2L8 8L14 8"}),
          h('path', {"d":"M18 3L22 3"}),
          h('path', {"d":"M18 7L22 7"}),
          h('path', {"d":"M18 11L22 11"}),
          h('path', {"d":"M3 22L9 18L16 22L22 16"}),
          h('path', {"d":"M18 16L22 16L22 20"})
        ]
      );
  }
});

export default DashboardPieTrendUp;
export { DashboardPieTrendUp };
