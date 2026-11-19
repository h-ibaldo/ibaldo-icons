import { defineComponent, h } from 'vue';

const HouseDoorArchPentagon = defineComponent({
  name: 'HouseDoorArchPentagon',
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
          h('path', {"d":"M9.00000000018008,22.000000000842192v-5.000002999979188c0-1.656852592641371,1.343144407359432-2.999997000002622,2.999997000000803-2.999997000002622h.000005999998393c1.656852592641371,0,2.999997000000803,1.343144407361251,2.999997000000803,2.999997000002622v5.000002999979188"}),
          h('path', {"d":"M22.00000000018008,22.000000000842192v-11.03875030502968c0-.607567444221786-.276179438069448-1.182193245429517-.750609904889643-1.56173761888931L13.249390095290437,2.99951207693266c-.730437301850543-.584349841490621-1.768342888361076-.584349841490621-2.4987801902098,0L2.750609905069723,9.399512076930478c-.474430466820195.379544373459794-.750609904889643.954170174671162-.750609904889643,1.561737618892948v11.038750305018766"})
        ]
      );
  }
});

export default HouseDoorArchPentagon;
export { HouseDoorArchPentagon };
