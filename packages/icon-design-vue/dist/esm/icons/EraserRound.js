import { defineComponent, h } from 'vue';

const EraserRound = defineComponent({
  name: 'EraserRound',
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
          h('path', {"d":"M14 2L7 9L15 17L22 10Z"}),
          h('path', {"d":"M3 22L21 22"}),
          h('path', {"d":"M14.5 16.5L11.414 19.586C10.633 20.367 9.367 20.367 8.586 19.586L4.414 15.414C3.633 14.633 3.633 13.367 4.414 12.586L7.5 9.5"})
        ]
      );
  }
});

export default EraserRound;
export { EraserRound };
