import { defineComponent, h } from 'vue';

const MedalStarBanner = defineComponent({
  name: 'MedalStarBanner',
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
          h('path', {"d":"M12 9L5 6L5 2L19 2L19 6Z"}),
          h('path', {"d":"M11.98 11L14.172 14.184L18 15.199L15.527 18.188L15.703 22L11.98 20.664L8.262 22L8.438 18.188L5.965 15.199L9.793 14.184Z"})
        ]
      );
  }
});

export default MedalStarBanner;
export { MedalStarBanner };
