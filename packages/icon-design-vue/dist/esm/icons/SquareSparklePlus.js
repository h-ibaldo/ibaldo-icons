import { defineComponent, h } from 'vue';

const SquareSparklePlus = defineComponent({
  name: 'SquareSparklePlus',
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
          h('path', {"d":"M11 7.5C14.039 7.5 16.5 9.961 16.5 13"}),
          h('path', {"d":"M22 7.5C18.961 7.5 16.5 9.961 16.5 13"}),
          h('path', {"d":"M22 7.5C18.961 7.5 16.5 5.039 16.5 2"}),
          h('path', {"d":"M11 7.5C14.039 7.5 16.5 5.039 16.5 2"}),
          h('path', {"d":"M21 13L21 18C21 19.656 19.656 21 18 21L6 21C4.344 21 3 19.656 3 18L3 6C3 4.344 4.344 3 6 3L11 3"}),
          h('path', {"d":"M9.5 12L9.5 17"}),
          h('path', {"d":"M12 14.5L7 14.5"})
        ]
      );
  }
});

export default SquareSparklePlus;
export { SquareSparklePlus };
