import { defineComponent, h } from 'vue';

const ClipboardListPlusShort = defineComponent({
  name: 'ClipboardListPlusShort',
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
          h('path', {"d":"M13 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4"}),
          h('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 12"}),
          h('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z"}),
          h('path', {"d":"M7 12L7 12"}),
          h('path', {"d":"M7 17L7 17"}),
          h('path', {"d":"M11 12L17 12"}),
          h('path', {"d":"M11 17L13 17"}),
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M22 19L16 19"})
        ]
      );
  }
});

export default ClipboardListPlusShort;
export { ClipboardListPlusShort };
