import { defineComponent, h } from 'vue';

const TicketCheckFolded = defineComponent({
  name: 'TicketCheckFolded',
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
          h('path', {"d":"M6 8L6 10"}),
          h('path', {"d":"M6 13L6 14"}),
          h('path', {"d":"M6 17L6 18"}),
          h('path', {"d":"M2 8L22 8L22 20L2 20Z"}),
          h('path', {"d":"M2 8L19 3L19 8"}),
          h('path', {"d":"M10 16L12 17L18 11"}),
          h('path', {"d":"M10 13L16 13"})
        ]
      );
  }
});

export default TicketCheckFolded;
export { TicketCheckFolded };
