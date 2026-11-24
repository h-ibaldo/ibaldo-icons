import { defineComponent, h } from 'vue';

const HouseEaves = defineComponent({
  name: 'HouseEaves',
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
          h('path', {"d":"M5.007265261379871,10.000000000842192v10c0,.552284749828686.447715250169495,1,1,1h12c.552284749830505,0,1-.447715250171314,1-1v-10"}),
          h('path', {"d":"M21.787135120239327,13.000000000842192L13.553536993700618,4.017901874094605c-.831365098711103-.906942843332217-2.261178365921296-.906942843332217-3.09254346463058,0L2.227395402520415,13.000000000842192"})
        ]
      );
  }
});

export default HouseEaves;
export { HouseEaves };
