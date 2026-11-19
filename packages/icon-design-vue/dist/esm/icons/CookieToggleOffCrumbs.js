import { defineComponent, h } from 'vue';

const CookieToggleOffCrumbs = defineComponent({
  name: 'CookieToggleOffCrumbs',
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
          h('path', {"d":"M9 22L3 22C1.344 22 0 20.656 0 19C0 17.344 1.344 16 3 16L9 16C10.656 16 12 17.344 12 19C12 20.656 10.656 22 9 22Z"}),
          h('path', {"d":"M3 16C4.656 16 6 17.344 6 19C6 20.656 4.656 22 3 22"}),
          h('path', {"d":"M16 21.148C19.266 19.719 21.621 16.609 21.953 12.902C21.645 12.965 21.328 13 21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C5.996 2.504 2 6.781 2 12"}),
          h('path', {"d":"M8 9C8 9.551 7.555 10 7 10C6.445 10 6 9.551 6 9C6 8.449 6.445 8 7 8C7.555 8 8 8.449 8 9Z"}),
          h('path', {"d":"M22 6C22 6.551 21.555 7 21 7C20.445 7 20 6.551 20 6C20 5.449 20.445 5 21 5C21.555 5 22 5.449 22 6Z"}),
          h('path', {"d":"M11 12L11 12"}),
          h('path', {"d":"M16 15L16 15"}),
          h('path', {"d":"M17 2L17 2"})
        ]
      );
  }
});

export default CookieToggleOffCrumbs;
export { CookieToggleOffCrumbs };
