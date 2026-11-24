import { defineComponent, h } from 'vue';

const HeartAngular = defineComponent({
  name: 'HeartAngular',
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
          h('path', {"d":"M20.475006104339627,5.500000005168658c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0l-1.5,1.5-1.5-1.5c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0-1.932983398450233,1.932983398440228-1.932983398450233,5.067016601565228,0,7l8.5,8.5,8.5-8.5c1.932983398430224-1.932983398434772,1.932983398430224-5.067016601559772,0-7Z"})
        ]
      );
  }
});

export default HeartAngular;
export { HeartAngular };
