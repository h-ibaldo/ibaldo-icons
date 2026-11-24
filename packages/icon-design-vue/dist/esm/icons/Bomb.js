import { defineComponent, h } from 'vue';

const Bomb = defineComponent({
  name: 'Bomb',
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
          h('path', {"d":"M16 15C16 11.133 12.867 8 9 8C5.133 8 2 11.133 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15Z"}),
          h('path', {"d":"M14 10L16 8"}),
          h('path', {"d":"M19 5L21 3"}),
          h('path', {"d":"M14 2L15 4"}),
          h('path', {"d":"M20 9L22 10"})
        ]
      );
  }
});

export default Bomb;
export { Bomb };
