import { defineComponent, h } from 'vue';

const ContactlessCard = defineComponent({
  name: 'ContactlessCard',
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
          h('path', {"d":"M12 10.023C13.148 11.172 13.148 13.035 12 14.184"}),
          h('path', {"d":"M14.945 7.383C17.551 9.988 17.551 14.219 14.945 16.824"}),
          h('path', {"d":"M17.887 4.59C22.035 8.738 22.035 15.469 17.887 19.617"}),
          h('path', {"d":"M4 8L7 8C7.551 8 8 8.449 8 9L8 15C8 15.551 7.551 16 7 16L4 16C3.449 16 3 15.551 3 15L3 9C3 8.449 3.449 8 4 8Z"})
        ]
      );
  }
});

export default ContactlessCard;
export { ContactlessCard };
