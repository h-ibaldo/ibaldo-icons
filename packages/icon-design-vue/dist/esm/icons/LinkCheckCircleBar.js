import { defineComponent, h } from 'vue';

const LinkCheckCircleBar = defineComponent({
  name: 'LinkCheckCircleBar',
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
          h('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z"}),
          h('path', {"d":"M13.828 8.172L15.172 6.828C16.277 5.723 16.277 3.934 15.172 2.828C14.066 1.723 12.277 1.723 11.172 2.828L9.828 4.172C8.723 5.277 8.723 7.066 9.828 8.172C10.383 8.723 11.105 9 11.828 9C12.555 9 13.277 8.723 13.828 8.172Z"}),
          h('path', {"d":"M6.828 15.172L8.172 13.828C9.277 12.723 9.277 10.934 8.172 9.828C7.066 8.723 5.277 8.723 4.172 9.828L2.828 11.172C1.723 12.277 1.723 14.066 2.828 15.172C3.934 16.277 5.723 16.277 6.828 15.172Z"}),
          h('path', {"d":"M6 12L12 6"}),
          h('path', {"d":"M15.5 17.02L16.5 18.02L18.5 16.02"})
        ]
      );
  }
});

export default LinkCheckCircleBar;
export { LinkCheckCircleBar };
