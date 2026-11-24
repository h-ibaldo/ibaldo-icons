import { defineComponent, h } from 'vue';

const MoonSun = defineComponent({
  name: 'MoonSun',
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
          h('path', {"d":"M2 12.117C2 8.063 4.414 4.57 7.883 3C7.316 4.254 7 5.648 7 7.117C7 12.641 11.477 17.117 17 17.117C18.469 17.117 19.859 16.801 21.117 16.234C19.547 19.703 16.055 22.117 12 22.117C6.477 22.117 2 17.641 2 12.117Z"}),
          h('path', {"d":"M9.352 7.758C10.121 7.277 11.027 7 12 7C14.762 7 17 9.238 17 12C17 13.004 16.703 13.938 16.199 14.719"}),
          h('path', {"d":"M18 6L20 4"}),
          h('path', {"d":"M14 4L14 2"}),
          h('path', {"d":"M20 10L22 10"})
        ]
      );
  }
});

export default MoonSun;
export { MoonSun };
