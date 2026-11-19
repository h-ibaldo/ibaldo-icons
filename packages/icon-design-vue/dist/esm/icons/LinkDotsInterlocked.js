import { defineComponent, h } from 'vue';

const LinkDotsInterlocked = defineComponent({
  name: 'LinkDotsInterlocked',
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
          h('path', {"d":"M11 12.102L10.586 12.516C9.023 14.078 9.023 16.609 10.586 18.172L10.93 18.516C12.492 20.078 15.023 20.078 16.586 18.516L20.93 14.172C22.492 12.609 22.492 10.078 20.93 8.516L20.586 8.172C19.219 6.805 17.109 6.633 15.559 7.66"}),
          h('path', {"d":"M13 16.102L13.414 15.688C14.977 14.125 14.977 11.59 13.414 10.031L13.07 9.688C11.508 8.125 8.977 8.125 7.414 9.688L3.07 14.031C1.508 15.59 1.508 18.125 3.07 19.688L3.414 20.031C4.781 21.395 6.891 21.566 8.441 20.543"}),
          h('path', {"d":"M3 4L3 4"}),
          h('path', {"d":"M7 4L7 4"})
        ]
      );
  }
});

export default LinkDotsInterlocked;
export { LinkDotsInterlocked };
