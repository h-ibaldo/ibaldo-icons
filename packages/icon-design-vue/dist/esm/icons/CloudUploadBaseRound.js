import { defineComponent, h } from 'vue';

const CloudUploadBaseRound = defineComponent({
  name: 'CloudUploadBaseRound',
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
          h('polyline', {"points":"8.99999999998181 12.999999973497324 11.99999999998181 9.999999973497324 14.99999999998181 12.999999973497324"}),
          h('line', {"x1":"11.99999999998181","y1":"18.999999973497324","x2":"11.99999999998181","y2":"9.999999973497324"}),
          h('path', {"d":"M17.92425538549287,9.093139648428405c-.438171386720569-2.882202148430224-2.919616699220569-5.093139648430224-5.924255371090112-5.093139648430224-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371090112,5.093139648430224-2.318725585941138.434509277349207-4.075744628909888,2.462036132819776-4.075744628909888,4.906860351569776,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042970569-4.472351074220569-4.075744628909888-4.906860351569776Z"})
        ]
      );
  }
});

export default CloudUploadBaseRound;
export { CloudUploadBaseRound };
