import { defineComponent, h } from 'vue';

const SwitchKnobUpRight = defineComponent({
  name: 'SwitchKnobUpRight',
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
          h('circle', {"cx":"11.99999997708619","cy":"11.997562035419833","r":"10"}),
          h('line', {"x1":"19.071067788796427","y1":"4.926494223393092","x2":"14.828427101776469","y2":"9.169134910611319"})
        ]
      );
  }
});

export default SwitchKnobUpRight;
export { SwitchKnobUpRight };
