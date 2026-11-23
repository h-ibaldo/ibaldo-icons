import { defineComponent, h } from 'vue';

const TextInitial = defineComponent({
  name: 'TextInitial',
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
          h('path', {"d":"M2 19L22.027 19"}),
          h('path', {"d":"M14 12L22.027 12"}),
          h('path', {"d":"M14 5L22.027 5"}),
          h('path', {"d":"M2 12L4.605 5.918C4.844 5.363 5.395 5 6 5C6.605 5 7.156 5.363 7.395 5.918L10 12"}),
          h('path', {"d":"M3 10L9 10"})
        ]
      );
  }
});

export default TextInitial;
export { TextInitial };
