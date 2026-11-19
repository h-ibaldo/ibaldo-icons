import { defineComponent, h } from 'vue';

const TrashCheckBucket = defineComponent({
  name: 'TrashCheckBucket',
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
          h('path', {"d":"M21 8L3 8C2.449 8 2 7.551 2 7L2 4C2 3.449 2.449 3 3 3L21 3C21.551 3 22 3.449 22 4L22 7C22 7.551 21.551 8 21 8Z"}),
          h('path', {"d":"M20 8L18.262 19.305C18.109 20.281 17.27 21 16.285 21L7.715 21C6.73 21 5.891 20.281 5.738 19.305L4 8"}),
          h('path', {"d":"M10 14L10.691 15.379C10.844 15.684 11.25 15.75 11.492 15.508L14 13"})
        ]
      );
  }
});

export default TrashCheckBucket;
export { TrashCheckBucket };
