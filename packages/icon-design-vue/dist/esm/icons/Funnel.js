import { defineComponent, h } from 'vue';

const Funnel = defineComponent({
  name: 'Funnel',
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
          h('path', {"d":"M3.925757121569404,2.999999999998181h16.072459907511075c.817286788489582,0,1.289441042179533.927202380597009.808736084300108,1.588171697672806l-6.844966038050188,9.411828302323556v6.000000000003638l-4,2v-8L3.117021037269296,4.588171697670987c-.48070495787033-.660969317075796-.008550704189474-1.588171697672806.808736084300108-1.588171697672806Z"})
        ]
      );
  }
});

export default Funnel;
export { Funnel };
