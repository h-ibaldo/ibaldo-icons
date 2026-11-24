import { defineComponent, h } from 'vue';

const GaugeTeardropFlat = defineComponent({
  name: 'GaugeTeardropFlat',
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
          h('path', {"d":"M17.988 21L6.016 21C4.305 19.723 2.984 17.898 2.367 15.688C0.887 10.363 3.996 4.852 9.316 3.367C14.637 1.887 20.152 5 21.633 10.316C22.773 14.406 21.191 18.602 17.988 21Z"}),
          h('path', {"d":"M16.242 8.758L13.977 14.422C13.629 15.293 12.844 15.91 11.918 16.043C10.191 16.289 8.711 14.809 8.961 13.082C9.09 12.156 9.707 11.371 10.578 11.023Z"})
        ]
      );
  }
});

export default GaugeTeardropFlat;
export { GaugeTeardropFlat };
