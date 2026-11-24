import { defineComponent, h } from 'vue';

const CursorRippleDouble2 = defineComponent({
  name: 'CursorRippleDouble2',
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
          h('path', {"d":"M19.371 22L15.742 18.371L14.602 20.68C14.355 21.172 13.641 21.129 13.461 20.609L10.035 10.824C9.863 10.336 10.336 9.863 10.824 10.035L20.609 13.461C21.129 13.641 21.172 14.355 20.68 14.602L18.371 15.742L22 19.371Z"}),
          h('path', {"d":"M12.844 7.191C12.121 6.457 11.113 6 10 6C7.789 6 6 7.793 6 10C6 11.113 6.457 12.121 7.191 12.844"}),
          h('path', {"d":"M17.738 8C16.848 4.551 13.727 2 10 2C5.582 2 2 5.582 2 10C2 13.727 4.551 16.848 8 17.738"})
        ]
      );
  }
});

export default CursorRippleDouble2;
export { CursorRippleDouble2 };
