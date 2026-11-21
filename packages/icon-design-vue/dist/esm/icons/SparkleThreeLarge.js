import { defineComponent, h } from 'vue';

const SparkleThreeLarge = defineComponent({
  name: 'SparkleThreeLarge',
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
          h('path', {"d":"M2 8.5C5.59 8.5 8.5 11.41 8.5 15"}),
          h('path', {"d":"M15 8.5C11.41 8.5 8.5 11.41 8.5 15"}),
          h('path', {"d":"M15 8.5C11.41 8.5 8.5 5.59 8.5 2"}),
          h('path', {"d":"M2 8.5C5.59 8.5 8.5 5.59 8.5 2"}),
          h('path', {"d":"M9 19C10.656 19 12 20.344 12 22"}),
          h('path', {"d":"M15 19C13.344 19 12 20.344 12 22"}),
          h('path', {"d":"M15 19C13.344 19 12 17.656 12 16"}),
          h('path', {"d":"M9 19C10.656 19 12 17.656 12 16"}),
          h('path', {"d":"M14 13.5C15.934 13.5 17.5 15.066 17.5 17"}),
          h('path', {"d":"M21 13.5C19.066 13.5 17.5 15.066 17.5 17"}),
          h('path', {"d":"M21 13.5C19.066 13.5 17.5 11.934 17.5 10"}),
          h('path', {"d":"M14 13.5C15.934 13.5 17.5 11.934 17.5 10"})
        ]
      );
  }
});

export default SparkleThreeLarge;
export { SparkleThreeLarge };
