import { defineComponent, h } from 'vue';

const TicketVertical = defineComponent({
  name: 'TicketVertical',
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
          h('path', {"d":"M5.805 15L5.805 2L6.652 2C7.461 2 8.191 2.488 8.5 3.238L10.484 8.059C10.719 8.629 11.273 9 11.891 9C12.508 9 13.066 8.637 13.316 8.07L15.473 3.191C15.793 2.469 16.512 2 17.301 2L17.805 2L17.805 15L17.301 15C16.512 15 15.793 15.469 15.473 16.191L13.316 21.07C13.066 21.637 12.508 22 11.891 22C11.273 22 10.719 21.629 10.484 21.059L8.5 16.238C8.191 15.488 7.461 15 6.652 15Z"}),
          h('path', {"d":"M11 15L12 17L13 15Z"})
        ]
      );
  }
});

export default TicketVertical;
export { TicketVertical };
