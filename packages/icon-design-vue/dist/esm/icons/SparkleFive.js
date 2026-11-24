import { defineComponent, h } from 'vue';

const SparkleFive = defineComponent({
  name: 'SparkleFive',
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
          h('path', {"d":"M3 6C4.656 6 6 7.344 6 9"}),
          h('path', {"d":"M9 6C7.344 6 6 7.344 6 9"}),
          h('path', {"d":"M9 6C7.344 6 6 4.656 6 3"}),
          h('path', {"d":"M3 6C4.656 6 6 4.656 6 3"}),
          h('path', {"d":"M15 6C16.656 6 18 7.344 18 9"}),
          h('path', {"d":"M21 6C19.344 6 18 7.344 18 9"}),
          h('path', {"d":"M21 6C19.344 6 18 4.656 18 3"}),
          h('path', {"d":"M15 6C16.656 6 18 4.656 18 3"}),
          h('path', {"d":"M8 13C9.656 13 11 14.344 11 16"}),
          h('path', {"d":"M14 13C12.344 13 11 14.344 11 16"}),
          h('path', {"d":"M14 13C12.344 13 11 11.656 11 10"}),
          h('path', {"d":"M8 13C9.656 13 11 11.656 11 10"}),
          h('path', {"d":"M15 18C16.656 18 18 19.344 18 21"}),
          h('path', {"d":"M21 18C19.344 18 18 19.344 18 21"}),
          h('path', {"d":"M21 18C19.344 18 18 16.656 18 15"}),
          h('path', {"d":"M15 18C16.656 18 18 16.656 18 15"}),
          h('path', {"d":"M2 19C3.656 19 5 20.344 5 22"}),
          h('path', {"d":"M8 19C6.344 19 5 20.344 5 22"}),
          h('path', {"d":"M8 19C6.344 19 5 17.656 5 16"}),
          h('path', {"d":"M2 19C3.656 19 5 17.656 5 16"})
        ]
      );
  }
});

export default SparkleFive;
export { SparkleFive };
