import { defineComponent, h } from 'vue';

const TicketSlashSide = defineComponent({
  name: 'TicketSlashSide',
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
          h('path', {"d":"M2 18L2 6L6 6C6 7.105 6.895 8 8 8C9.105 8 10 7.105 10 6L22 6L22 9C20.344 9 19 10.344 19 12C19 13.656 20.344 15 22 15L22 18L10 18C10 16.895 9.105 16 8 16C6.895 16 6 16.895 6 18Z"}),
          h('path', {"d":"M12 14L16 10"})
        ]
      );
  }
});

export default TicketSlashSide;
export { TicketSlashSide };
