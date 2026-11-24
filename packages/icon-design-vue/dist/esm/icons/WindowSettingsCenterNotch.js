import { defineComponent, h } from 'vue';

const WindowSettingsCenterNotch = defineComponent({
  name: 'WindowSettingsCenterNotch',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M5 5L5 5"}),
          h('path', {"d":"M8 5L8 5"}),
          h('path', {"d":"M11 5L11 5"}),
          h('path', {"d":"M15 15C15 13.344 13.656 12 12 12C10.344 12 9 13.344 9 15C9 16.656 10.344 18 12 18C13.656 18 15 16.656 15 15Z"}),
          h('path', {"d":"M12 11L12 12"}),
          h('path', {"d":"M12 18L12 19"}),
          h('path', {"d":"M8.535 13L9.402 13.5"}),
          h('path', {"d":"M14.598 16.5L15.465 17"}),
          h('path', {"d":"M8.535 17L9.402 16.5"}),
          h('path', {"d":"M14.598 13.5L15.465 13"}),
          h('path', {"d":"M2 17L4 15L2 13"})
        ]
      );
  }
});

export default WindowSettingsCenterNotch;
export { WindowSettingsCenterNotch };
