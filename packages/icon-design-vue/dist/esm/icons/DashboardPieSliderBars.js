import { defineComponent, h } from 'vue';

const DashboardPieSliderBars = defineComponent({
  name: 'DashboardPieSliderBars',
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
          h('path', {"d":"M2 22L2 18"}),
          h('path', {"d":"M6 22L6 20"}),
          h('path', {"d":"M10 22L10 18"}),
          h('path', {"d":"M14 22L14 20"}),
          h('path', {"d":"M18 22L18 16"}),
          h('path', {"d":"M22 22L22 13"}),
          h('path', {"d":"M20 2L20 9"}),
          h('path', {"d":"M20 6C20.555 6 21 5.555 21 5C21 4.445 20.555 4 20 4C19.445 4 19 4.445 19 5C19 5.555 19.445 6 20 6Z"})
        ]
      );
  }
});

export default DashboardPieSliderBars;
export { DashboardPieSliderBars };
