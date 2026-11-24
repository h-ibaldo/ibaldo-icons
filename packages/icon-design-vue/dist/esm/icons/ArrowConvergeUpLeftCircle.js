import { defineComponent, h } from 'vue';

const ArrowConvergeUpLeftCircle = defineComponent({
  name: 'ArrowConvergeUpLeftCircle',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M9 18L9 15L12 15"}),
          h('path', {"d":"M11 8L11 11L8 11"}),
          h('path', {"d":"M15 12L15 9L18 9"}),
          h('path', {"d":"M7 7L11 11"}),
          h('path', {"d":"M9 15L13 19"}),
          h('path', {"d":"M15 9L19 13"})
        ]
      );
  }
});

export default ArrowConvergeUpLeftCircle;
export { ArrowConvergeUpLeftCircle };
