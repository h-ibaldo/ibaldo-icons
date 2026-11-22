import { defineComponent, h } from 'vue';

const ScanQrCode = defineComponent({
  name: 'ScanQrCode',
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
          h('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22"}),
          h('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2"}),
          h('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17"}),
          h('path', {"d":"M8 7L11 7C11.551 7 12 7.449 12 8L12 10C12 10.551 11.551 11 11 11L8 11C7.449 11 7 10.551 7 10L7 8C7 7.449 7.449 7 8 7Z"}),
          h('path', {"d":"M15 7L17 7L17 10L15 10Z"}),
          h('path', {"d":"M16 16L17 16L17 17L16 17Z"}),
          h('path', {"d":"M7 14L9 14L9 17L7 17Z"}),
          h('path', {"d":"M12 14L13 14L13 17L12 17Z"}),
          h('path', {"d":"M16 13L17 13"})
        ]
      );
  }
});

export default ScanQrCode;
export { ScanQrCode };
