import { defineComponent, h } from 'vue';

const WindowSpinnerDotsPlain = defineComponent({
  name: 'WindowSpinnerDotsPlain',
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
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M8 15L8 15"}),
          h('path', {"d":"M16 15L16 15"}),
          h('path', {"d":"M12 11L12 11"}),
          h('path', {"d":"M12 19L12 19"}),
          h('path', {"d":"M9.172 17.828L9.172 17.828"}),
          h('path', {"d":"M14.828 12.172L14.828 12.172"}),
          h('path', {"d":"M9.172 12.172L9.172 12.172"}),
          h('path', {"d":"M14.828 17.828L14.828 17.828"})
        ]
      );
  }
});

export default WindowSpinnerDotsPlain;
export { WindowSpinnerDotsPlain };
