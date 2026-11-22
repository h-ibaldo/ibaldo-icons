import { defineComponent, h } from 'vue';

const FilterLinesShort = defineComponent({
  name: 'FilterLinesShort',
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
          h('path', {"d":"M2 4L22 4"}),
          h('path', {"d":"M6 12L18 12"}),
          h('path', {"d":"M10 20L14 20"})
        ]
      );
  }
});

export default FilterLinesShort;
export { FilterLinesShort };
