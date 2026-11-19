import { defineComponent, h } from 'vue';

const TrophyPointed = defineComponent({
  name: 'TrophyPointed',
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
          h('path', {"d":"M8 22L16 22"}),
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M15.949 13.949L12 17.898L8.051 13.949C6.738 12.637 6 10.855 6 9L6 2L18 2L18 9C18 10.855 17.262 12.637 15.949 13.949Z"}),
          h('path', {"d":"M17.648 11.176L20.293 9.855C21.34 9.332 22 8.262 22 7.09C22 5.383 20.617 4 18.91 4L18 4"}),
          h('path', {"d":"M6.352 11.176L3.707 9.855C2.66 9.332 2 8.262 2 7.09C2 5.383 3.383 4 5.09 4L6 4"})
        ]
      );
  }
});

export default TrophyPointed;
export { TrophyPointed };
