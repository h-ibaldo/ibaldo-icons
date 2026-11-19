import { defineComponent, h } from 'vue';

const LinkArrowUpSlanted2 = defineComponent({
  name: 'LinkArrowUpSlanted2',
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
          h('path', {"d":"M11.949 15C10.582 16.367 8.367 16.367 7 15L3.023 11.023C1.656 9.656 1.656 7.441 3.023 6.074L3.074 6.023C4.441 4.656 6.656 4.656 8.023 6.023L10 8"}),
          h('path', {"d":"M9.051 12C10.418 10.633 12.633 10.633 14 12L17.977 15.977C19.344 17.344 19.344 19.559 17.977 20.926L17.926 20.977C16.559 22.344 14.344 22.344 12.977 20.977L11 19"}),
          h('path', {"d":"M22 5L19 2L16 5"}),
          h('path', {"d":"M19 10L19 2"})
        ]
      );
  }
});

export default LinkArrowUpSlanted2;
export { LinkArrowUpSlanted2 };
