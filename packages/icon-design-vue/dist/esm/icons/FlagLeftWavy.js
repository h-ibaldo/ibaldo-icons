import { defineComponent, h } from 'vue';

const FlagLeftWavy = defineComponent({
  name: 'FlagLeftWavy',
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
          h('path', {"d":"M20 2.031L20 22.031"}),
          h('path', {"d":"M20 14.031L17.887 13.004C16.621 12.391 15.141 12.402 13.887 13.031C12.625 13.664 11.148 13.68 9.875 13.074L9.781 13.031C8.457 12.402 6.914 12.445 5.625 13.148L4 14.031L4 4.031L5.93 3.043C7.176 2.406 8.648 2.402 9.898 3.031C11.148 3.66 12.625 3.668 13.883 3.047L13.918 3.031C15.199 2.402 16.699 2.402 17.977 3.035L20 4.031"})
        ]
      );
  }
});

export default FlagLeftWavy;
export { FlagLeftWavy };
