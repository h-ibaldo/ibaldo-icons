import { defineComponent, h } from 'vue';

const ServerSettings = defineComponent({
  name: 'ServerSettings',
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
          h('path', {"d":"M15.5 12C15.5 13.934 13.934 15.5 12 15.5C10.066 15.5 8.5 13.934 8.5 12C8.5 10.066 10.066 8.5 12 8.5C13.934 8.5 15.5 10.066 15.5 12Z"}),
          h('path', {"d":"M12 12.012L12 12"}),
          h('path', {"d":"M12 7L12 8.5"}),
          h('path', {"d":"M12 15.5L12 17"}),
          h('path', {"d":"M17 12L15.5 12"}),
          h('path', {"d":"M8.5 12L7 12"}),
          h('path', {"d":"M15.535 15.535L14.477 14.477"}),
          h('path', {"d":"M9.523 9.523L8.465 8.465"}),
          h('path', {"d":"M8.465 15.535L9.523 14.477"}),
          h('path', {"d":"M14.477 9.523L15.535 8.465"}),
          h('path', {"d":"M7 5L6 5"}),
          h('path', {"d":"M18.902 16L21 16C21.551 16 22 16.449 22 17L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 17C2 16.449 2.449 16 3 16L5 16"}),
          h('path', {"d":"M5.098 8L3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L19 8"}),
          h('path', {"d":"M7 19L6 19"})
        ]
      );
  }
});

export default ServerSettings;
export { ServerSettings };
