import { defineComponent, h } from 'vue';

const CardTextCursor = defineComponent({
  name: 'CardTextCursor',
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
          h('path', {"d":"M22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L11 22"}),
          h('path', {"d":"M21 14.637L12.57 11.57C11.949 11.344 11.344 11.949 11.57 12.57L14.637 21C14.789 21.414 15.344 21.48 15.59 21.113L17 19L20 22L22 20L19 17L21.113 15.59C21.48 15.344 21.414 14.789 21 14.637Z"}),
          h('path', {"d":"M6 15L8 15"}),
          h('path', {"d":"M6 11L8 11"}),
          h('path', {"d":"M6 7L16 7"})
        ]
      );
  }
});

export default CardTextCursor;
export { CardTextCursor };
