import { defineComponent, h } from 'vue';

const CopyrightSmall = defineComponent({
  name: 'CopyrightSmall',
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
          h('path', {"d":"M21 12C21 16.973 16.973 21 12 21C7.027 21 3 16.973 3 12C3 7.027 7.027 3 12 3C16.973 3 21 7.027 21 12Z"}),
          h('path', {"d":"M15 9.379C14.266 8.543 13.203 8 12 8C9.789 8 8 9.793 8 12C8 14.211 9.789 16 12 16C13.203 16 14.266 15.461 15 14.621"})
        ]
      );
  }
});

export default CopyrightSmall;
export { CopyrightSmall };
