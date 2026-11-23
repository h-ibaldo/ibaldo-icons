import { defineComponent, h } from 'vue';

const TextLigature = defineComponent({
  name: 'TextLigature',
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
          h('path', {"d":"M7 22L7 7C7 4.238 9.238 2 12 2L12.051 2C14.813 2 17.051 4.238 17.051 7"}),
          h('path', {"d":"M17 22L17 12.039L14.047 12.039"}),
          h('path', {"d":"M4 22L10 22"}),
          h('path', {"d":"M4 12L10 12"}),
          h('path', {"d":"M14 22L20 22"})
        ]
      );
  }
});

export default TextLigature;
export { TextLigature };
