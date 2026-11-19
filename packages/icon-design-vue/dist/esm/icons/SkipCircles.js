import { defineComponent, h } from 'vue';

const SkipCircles = defineComponent({
  name: 'SkipCircles',
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
          h('rect', {"x":"9.974731440099276","y":"15.000000003885361","width":"4","height":"4"}),
          h('polyline', {"points":"21.974731440099276 7.000000003885361 21.974731440099276 11.000000003885361 17.974731440099276 11.000000003885361"}),
          h('path', {"d":"M21.450683588549509,11.000000003885361c-1.686401367200233-3.54412841796875-5.289733886729664-6-9.475952148450233-6-4.186218261709655,0-7.78955078125,2.45587158203125-9.475952148439319,6"}),
          h('circle', {"cx":"3.974731440099276","cy":"17.000000003886271","r":"2.000000000000455"}),
          h('circle', {"cx":"19.974731440099276","cy":"17.000000003886271","r":"2.000000000000455"})
        ]
      );
  }
});

export default SkipCircles;
export { SkipCircles };
