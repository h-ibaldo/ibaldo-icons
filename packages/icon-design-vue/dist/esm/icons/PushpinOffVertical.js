import { defineComponent, h } from 'vue';

const PushpinOffVertical = defineComponent({
  name: 'PushpinOffVertical',
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
          h('path', {"d":"M3 4L21 20"}),
          h('path', {"d":"M12 16L12 22"}),
          h('path', {"d":"M7 2L17 2L17 3.09C17 3.684 16.824 4.262 16.496 4.754L15 7L15 11L17.801 13.102C18.555 13.668 19 14.555 19 15.5L19 16L5 16L5 15.5C5 14.555 5.445 13.668 6.199 13.102L9 11L9 7L7.504 4.754C7.176 4.262 7 3.684 7 3.09Z"})
        ]
      );
  }
});

export default PushpinOffVertical;
export { PushpinOffVertical };
