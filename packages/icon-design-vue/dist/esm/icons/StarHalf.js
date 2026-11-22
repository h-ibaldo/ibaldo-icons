import { defineComponent, h } from 'vue';

const StarHalf = defineComponent({
  name: 'StarHalf',
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
          h('path', {"d":"M13 17.93L8.32 21.328C7.348 22.039 6.035 21.082 6.406 19.938L8.195 14.438L3.516 11.039C2.539 10.332 3.043 8.789 4.246 8.789L10.031 8.789L11.816 3.289"})
        ]
      );
  }
});

export default StarHalf;
export { StarHalf };
