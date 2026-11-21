import { defineComponent, h } from 'vue';

const TicketScalloped = defineComponent({
  name: 'TicketScalloped',
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
          h('path', {"d":"M7 9L7 15"}),
          h('path', {"d":"M17 9L17 15"}),
          h('path', {"d":"M2 9C3.656 9 5 7.656 5 6L19 6C19 7.656 20.344 9 22 9L22 15C20.344 15 19 16.344 19 18L5 18C5 16.344 3.656 15 2 15Z"})
        ]
      );
  }
});

export default TicketScalloped;
export { TicketScalloped };
