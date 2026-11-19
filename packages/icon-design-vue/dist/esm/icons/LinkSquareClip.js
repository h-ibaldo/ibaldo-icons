import { defineComponent, h } from 'vue';

const LinkSquareClip = defineComponent({
  name: 'LinkSquareClip',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M15 13L16.172 11.828C17.277 10.723 17.277 8.934 16.172 7.828C15.066 6.723 13.277 6.723 12.172 7.828L11 9"}),
          h('path', {"d":"M9 11L7.828 12.172C6.723 13.277 6.723 15.066 7.828 16.172C8.934 17.277 10.723 17.277 11.828 16.172L13 15"}),
          h('path', {"d":"M13 11L11 13"})
        ]
      );
  }
});

export default LinkSquareClip;
export { LinkSquareClip };
