import { defineComponent, h } from 'vue';

const LinkRaysFlat = defineComponent({
  name: 'LinkRaysFlat',
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
          h('path', {"d":"M6.5 11C4.016 11 2 13.016 2 15.5C2 17.984 4.016 20 6.5 20L10.5 20C12.984 20 15 17.984 15 15.5C15 15.328 14.973 15.164 14.949 15"}),
          h('path', {"d":"M17.5 20C19.984 20 22 17.984 22 15.5C22 13.016 19.984 11 17.5 11L13.5 11C11.016 11 9 13.016 9 15.5C9 15.672 9.027 15.836 9.047 16"}),
          h('path', {"d":"M11 3L11 5"}),
          h('path', {"d":"M5.758 4.758L7.172 6.172"}),
          h('path', {"d":"M16.414 4.758L15 6.172"})
        ]
      );
  }
});

export default LinkRaysFlat;
export { LinkRaysFlat };
