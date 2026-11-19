import { defineComponent, h } from 'vue';

const AnchorBare = defineComponent({
  name: 'AnchorBare',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12"}),
          h('path', {"d":"M15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5Z"}),
          h('path', {"d":"M12 8L12 22"}),
          h('path', {"d":"M2 12L5 12"}),
          h('path', {"d":"M19 12L22 12"})
        ]
      );
  }
});

export default AnchorBare;
export { AnchorBare };
