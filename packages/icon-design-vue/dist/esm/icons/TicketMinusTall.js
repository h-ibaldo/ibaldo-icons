import { defineComponent, h } from 'vue';

const TicketMinusTall = defineComponent({
  name: 'TicketMinusTall',
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
          h('path', {"d":"M21.961 9L22 9L22 5L2 5L2 9L2.039 9C3.676 9 5 10.324 5 11.961C5 13.594 3.676 14.918 2.039 14.918L2 14.918L2 19L22 19L22 14.918L21.961 14.918C20.324 14.918 19 13.594 19 11.961C19 10.324 20.324 9 21.961 9Z"}),
          h('path', {"d":"M9 12L15 12"})
        ]
      );
  }
});

export default TicketMinusTall;
export { TicketMinusTall };
