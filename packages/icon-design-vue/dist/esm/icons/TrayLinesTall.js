import { defineComponent, h } from 'vue';

const TrayLinesTall = defineComponent({
  name: 'TrayLinesTall',
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
          h('path', {"d":"M3 14L3 20C3 21.105 3.895 22 5 22L19 22C20.105 22 21 21.105 21 20L21 14"}),
          h('path', {"d":"M7 17L17 17"}),
          h('path', {"d":"M7 12L17 12"}),
          h('path', {"d":"M7 7L17 7"}),
          h('path', {"d":"M7 2L17 2"})
        ]
      );
  }
});

export default TrayLinesTall;
export { TrayLinesTall };
