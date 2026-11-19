import { defineComponent, h } from 'vue';

const ReceiptDollar = defineComponent({
  name: 'ReceiptDollar',
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
          h('path', {"d":"M16 22L5 22"}),
          h('path', {"d":"M8 19L8 2L12 4L15 2L18 4L22 2L22 6"}),
          h('path', {"d":"M16 8L12 8"}),
          h('path', {"d":"M15 12L12 12"}),
          h('path', {"d":"M15 16L12 16"}),
          h('path', {"d":"M8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19"}),
          h('path', {"d":"M8 14L2 14L2 19"}),
          h('path', {"d":"M21.879 11C21.051 10.172 19.707 10.172 18.879 11C18.051 11.828 18.051 13.172 18.879 14L21.379 16.5C22.207 17.328 22.207 18.672 21.379 19.5C20.551 20.328 19.207 20.328 18.379 19.5"}),
          h('path', {"d":"M20.258 9L20.258 10.379"}),
          h('path', {"d":"M20.258 20.121L20.258 22"})
        ]
      );
  }
});

export default ReceiptDollar;
export { ReceiptDollar };
