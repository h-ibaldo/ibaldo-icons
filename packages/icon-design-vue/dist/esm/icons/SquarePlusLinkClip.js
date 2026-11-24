import { defineComponent, h } from 'vue';

const SquarePlusLinkClip = defineComponent({
  name: 'SquarePlusLinkClip',
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
          h('path', {"d":"M22 7C22 4.238 19.762 2 17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22"}),
          h('path', {"d":"M13 16L11.828 17.172C10.723 18.277 10.723 20.066 11.828 21.172C12.934 22.277 14.723 22.277 15.828 21.172L17 20"}),
          h('path', {"d":"M20 17L21.172 15.828C22.277 14.723 22.277 12.934 21.172 11.828C20.066 10.723 18.277 10.723 17.172 11.828L16 13"}),
          h('path', {"d":"M15 18L18 15"}),
          h('path', {"d":"M7 9.5L12 9.5"}),
          h('path', {"d":"M9.5 7L9.5 12"})
        ]
      );
  }
});

export default SquarePlusLinkClip;
export { SquarePlusLinkClip };
