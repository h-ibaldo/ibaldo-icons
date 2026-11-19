import { defineComponent, h } from 'vue';

const CookieSettingsCrumbs = defineComponent({
  name: 'CookieSettingsCrumbs',
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
          h('path', {"d":"M10.25 17C10.25 18.797 8.797 20.25 7 20.25C5.203 20.25 3.75 18.797 3.75 17C3.75 15.203 5.203 13.75 7 13.75C8.797 13.75 10.25 15.203 10.25 17Z"}),
          h('path', {"d":"M7 22L7 21"}),
          h('path', {"d":"M7 13.5L7 12"}),
          h('path', {"d":"M11.332 19.5L10.031 18.75"}),
          h('path', {"d":"M3.969 15.25L2.668 14.5"}),
          h('path', {"d":"M11.332 14.5L10.031 15.25"}),
          h('path', {"d":"M3.969 18.75L2.668 19.5"}),
          h('path', {"d":"M9 8C9 8.551 8.551 9 8 9C7.449 9 7 8.551 7 8C7 7.449 7.449 7 8 7C8.551 7 9 7.449 9 8Z"}),
          h('path', {"d":"M22 6C22 6.551 21.551 7 21 7C20.449 7 20 6.551 20 6C20 5.449 20.449 5 21 5C21.551 5 22 5.449 22 6Z"}),
          h('path', {"d":"M12 11L12 11"}),
          h('path', {"d":"M16 16L16 16"}),
          h('path', {"d":"M17 2L17 2"}),
          h('path', {"d":"M16 21.148C19.266 19.719 21.621 16.609 21.953 12.902C21.645 12.965 21.328 13 21 13C18.238 13 16 10.762 16 8C13.238 8 11 5.762 11 3C11 2.672 11.035 2.355 11.098 2.047C6.328 2.473 2.523 6.246 2.051 11"})
        ]
      );
  }
});

export default CookieSettingsCrumbs;
export { CookieSettingsCrumbs };
