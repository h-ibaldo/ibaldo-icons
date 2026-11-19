import { defineComponent, h } from 'vue';

const RecordOffCircle = defineComponent({
  name: 'RecordOffCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M17 8L7 16"}),
          h('path', {"d":"M8.891 14.488C9.625 15.402 10.738 16 12 16C14.207 16 16 14.207 16 12C16 11.055 15.66 10.195 15.109 9.512"}),
          h('path', {"d":"M12.445 8.043C12.297 8.027 12.152 8 12 8C9.941 8 8.262 9.563 8.043 11.566"})
        ]
      );
  }
});

export default RecordOffCircle;
export { RecordOffCircle };
