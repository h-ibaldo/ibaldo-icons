import { defineComponent, h } from 'vue';

const WidgetDotsSquare = defineComponent({
  name: 'WidgetDotsSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M8 22L8 10C8 8.895 8.895 8 10 8L22 8"}),
          h('path', {"d":"M8 14L22 14"}),
          h('path', {"d":"M11 11L11 11"}),
          h('path', {"d":"M14 11L14 11"}),
          h('path', {"d":"M17 11L17 11"})
        ]
      );
  }
});

export default WidgetDotsSquare;
export { WidgetDotsSquare };
