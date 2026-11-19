import { defineComponent, h } from 'vue';

const LinkCircleArrowRightSlanted = defineComponent({
  name: 'LinkCircleArrowRightSlanted',
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
          h('path', {"d":"M7.5 11.5C6.395 10.395 6.395 8.605 7.5 7.5C8.605 6.395 10.395 6.395 11.5 7.5L13.172 9.172C14.277 10.277 14.277 12.066 13.172 13.172"}),
          h('path', {"d":"M16.5 12.5C17.605 13.605 17.605 15.395 16.5 16.5C15.395 17.605 13.605 17.605 12.5 16.5L10.828 14.828C9.723 13.723 9.723 11.934 10.828 10.828"}),
          h('path', {"d":"M6 18L8 20L6 22"}),
          h('path', {"d":"M2 20L8 20"}),
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"})
        ]
      );
  }
});

export default LinkCircleArrowRightSlanted;
export { LinkCircleArrowRightSlanted };
