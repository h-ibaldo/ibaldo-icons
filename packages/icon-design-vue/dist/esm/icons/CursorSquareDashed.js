import { defineComponent, h } from 'vue';

const CursorSquareDashed = defineComponent({
  name: 'CursorSquareDashed',
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
          h('path', {"d":"M11.633 14.863L8.879 15.82L11.168 20.023L7.566 21.988L5.273 17.785L2.977 19.586C2.582 19.895 2 19.613 2 19.109L2 8.605C2 8.129 2.531 7.84 2.93 8.098L11.762 13.785C12.188 14.059 12.109 14.699 11.633 14.863Z"}),
          h('path', {"d":"M2 4L2 3C2 2.445 2.449 2 3 2L4 2"}),
          h('path', {"d":"M8 2L10 2"}),
          h('path', {"d":"M14 2L16 2"}),
          h('path', {"d":"M20 2L21 2C21.551 2 22 2.445 22 3L22 4"}),
          h('path', {"d":"M22 8L22 10"}),
          h('path', {"d":"M22 14L22 16"}),
          h('path', {"d":"M22 20L22 21C22 21.555 21.551 22 21 22L20 22"}),
          h('path', {"d":"M16 22L14 22"})
        ]
      );
  }
});

export default CursorSquareDashed;
export { CursorSquareDashed };
