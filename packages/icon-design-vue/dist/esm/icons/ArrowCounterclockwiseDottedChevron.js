import { defineComponent, h } from 'vue';

const ArrowCounterclockwiseDottedChevron = defineComponent({
  name: 'ArrowCounterclockwiseDottedChevron',
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
          h('path', {"d":"M7 2L4 5L7 8"}),
          h('path', {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13"}),
          h('path', {"d":"M4 5L12 5"}),
          h('path', {"d":"M12 13L12 13"}),
          h('path', {"d":"M12 9L12 9"}),
          h('path', {"d":"M12 17L12 17"}),
          h('path', {"d":"M8.535 11L8.535 11"}),
          h('path', {"d":"M15.465 15L15.465 15"}),
          h('path', {"d":"M8.535 15L8.535 15"}),
          h('path', {"d":"M15.465 11L15.465 11"})
        ]
      );
  }
});

export default ArrowCounterclockwiseDottedChevron;
export { ArrowCounterclockwiseDottedChevron };
