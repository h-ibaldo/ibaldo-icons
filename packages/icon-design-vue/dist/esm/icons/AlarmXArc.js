import { defineComponent, h } from 'vue';

const AlarmXArc = defineComponent({
  name: 'AlarmXArc',
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
          h('path', {"d":"M18 19L20 21"}),
          h('path', {"d":"M6 19L4 21"}),
          h('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"}),
          h('path', {"d":"M22 6.5C22 4.566 20.434 3 18.5 3"}),
          h('path', {"d":"M2 6.5C2 4.566 3.566 3 5.5 3"}),
          h('path', {"d":"M10 15L14 11"}),
          h('path', {"d":"M14 15L10 11"})
        ]
      );
  }
});

export default AlarmXArc;
export { AlarmXArc };
