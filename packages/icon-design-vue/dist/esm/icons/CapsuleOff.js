import { defineComponent, h } from 'vue';

const CapsuleOff = defineComponent({
  name: 'CapsuleOff',
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
          h('path', {"d":"M17 2L7 22"}),
          h('path', {"d":"M15 6L6.5 6C4.016 6 2 8.016 2 10.5C2 12.984 4.016 15 6.5 15L10.5 15"}),
          h('path', {"d":"M9 18L17.5 18C19.984 18 22 15.984 22 13.5C22 11.016 19.984 9 17.5 9L13.5 9"})
        ]
      );
  }
});

export default CapsuleOff;
export { CapsuleOff };
