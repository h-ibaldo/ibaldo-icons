import { defineComponent, h } from 'vue';

const Forward = defineComponent({
  name: 'Forward',
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
          h('path', {"d":"M22,8.999999999998181L14,1.999999999998181v4.159057617190228c-6.781982421880457.972778320309772-12,6.789916992179315-12,13.840942382809772v2l1.921752929690228-3.202880859380457c2.195678710929315-3.659423828119543,5.918579101559772-6.08349609375,10.078247070309772-6.6611328125v3.864013671880457l8-7Z"})
        ]
      );
  }
});

export default Forward;
export { Forward };
