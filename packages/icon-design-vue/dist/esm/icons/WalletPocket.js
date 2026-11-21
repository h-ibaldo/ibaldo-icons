import { defineComponent, h } from 'vue';

const WalletPocket = defineComponent({
  name: 'WalletPocket',
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
          h('path', {"d":"M5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4Z"}),
          h('path', {"d":"M2 13L7.5 13C8.328 13 9 13.672 9 14.5C9 15.328 9.672 16 10.5 16L13.5 16C14.328 16 15 15.328 15 14.5C15 13.672 15.672 13 16.5 13L22 13"}),
          h('path', {"d":"M5 13L5 9C5 7.895 5.895 7 7 7L17 7C18.105 7 19 7.895 19 9L19 13"}),
          h('path', {"d":"M5 13L5 12C5 10.895 5.895 10 7 10L17 10C18.105 10 19 10.895 19 12L19 13"})
        ]
      );
  }
});

export default WalletPocket;
export { WalletPocket };
