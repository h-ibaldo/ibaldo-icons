import { defineComponent, h } from 'vue';

const BugOff = defineComponent({
  name: 'BugOff',
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
          h('path', {"d":"M15 5L18 2"}),
          h('path', {"d":"M18 12L21 11L21 8"}),
          h('path', {"d":"M19.555 15L22 15"}),
          h('path', {"d":"M6 12L3 11L3 8"}),
          h('path', {"d":"M6 18L3 19L3 22"}),
          h('path', {"d":"M6 15L2 15"}),
          h('path', {"d":"M12 14L12 22.063"}),
          h('path', {"d":"M2 2L21 22"}),
          h('path', {"d":"M10.203 4.477C10.742 4.172 11.355 4 12 4C14.211 4 16 6.016 16 8.5C16 8.898 15.953 9.281 15.867 9.648M8 8.5C8 8.438 8 8.379 8.004 8.32L9.266 9.648L8.133 9.648C8.047 9.281 8 8.898 8 8.5Z"}),
          h('path', {"d":"M13.887 8.352C15.484 8.969 16.789 10.352 17.473 12.133"}),
          h('path', {"d":"M6 15C6 12.527 7.098 10.355 8.754 9.109L17.355 18.164C16.363 20.441 14.34 22 12 22C8.688 22 6 18.867 6 15Z"})
        ]
      );
  }
});

export default BugOff;
export { BugOff };
