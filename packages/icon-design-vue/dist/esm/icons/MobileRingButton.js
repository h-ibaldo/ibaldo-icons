import { defineComponent, h } from 'vue';

const MobileRingButton = defineComponent({
  name: 'MobileRingButton',
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
          h('path', {"d":"M14 17.043L14 20C14 21.105 13.105 22 12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12 2C13.105 2 14 2.895 14 4L14 7.043"}),
          h('path', {"d":"M9 19L8 19"}),
          h('path', {"d":"M15 10.793C15.781 11.574 15.781 12.84 15 13.621"}),
          h('path', {"d":"M17 9C18.77 10.77 18.77 13.645 17 15.414"}),
          h('path', {"d":"M19 7.105C21.82 9.922 21.82 14.492 19 17.313"})
        ]
      );
  }
});

export default MobileRingButton;
export { MobileRingButton };
