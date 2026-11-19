import { defineComponent, h } from 'vue';

const SquareStackLinkClip = defineComponent({
  name: 'SquareStackLinkClip',
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
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2"}),
          h('path', {"d":"M17.172 14.828C18.277 13.723 18.277 11.934 17.172 10.828C16.066 9.723 14.277 9.723 13.172 10.828"}),
          h('path', {"d":"M10.828 13.172C9.723 14.277 9.723 16.066 10.828 17.172C11.934 18.277 13.723 18.277 14.828 17.172"}),
          h('path', {"d":"M13.328 14.672L14.672 13.328"}),
          h('path', {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z"})
        ]
      );
  }
});

export default SquareStackLinkClip;
export { SquareStackLinkClip };
