import { defineComponent, h } from 'vue';

const DashboardSlidersPieBars = defineComponent({
  name: 'DashboardSlidersPieBars',
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
          h('path', {"d":"M22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7Z"}),
          h('path', {"d":"M17 2L17 7L22 7"}),
          h('path', {"d":"M8 3L8 11"}),
          h('path', {"d":"M3 3L3 11"}),
          h('path', {"d":"M8 7C8.555 7 9 6.555 9 6C9 5.445 8.555 5 8 5C7.445 5 7 5.445 7 6C7 6.555 7.445 7 8 7Z"}),
          h('path', {"d":"M3 9C3.555 9 4 8.555 4 8C4 7.445 3.555 7 3 7C2.445 7 2 7.445 2 8C2 8.555 2.445 9 3 9Z"}),
          h('path', {"d":"M2 22L2 18"}),
          h('path', {"d":"M6 22L6 15"}),
          h('path', {"d":"M10 22L10 18"}),
          h('path', {"d":"M14 22L14 15"}),
          h('path', {"d":"M18 22L18 18"}),
          h('path', {"d":"M22 22L22 15"})
        ]
      );
  }
});

export default DashboardSlidersPieBars;
export { DashboardSlidersPieBars };
