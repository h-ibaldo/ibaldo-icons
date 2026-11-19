import { defineComponent, h } from 'vue';

const Cursor4 = defineComponent({
  name: 'Cursor4',
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
          h('path', {"d":"M18.602863429729041,21.970769791338171l-5.944931743948473-5.944946352319675-3.372822648379952,3.353468364019136c-.260988427220582.259490796081081-.702493618460721.165790130511596-.835588424410162-.177336966968141L2.035765456739682,2.666875387758409c-.160409950069152-.413547321981241.246780838440827-.82073816177035.660328127929461-.660328127929461l16.535077575801552,6.413758283339121c.343126820398538.133094778449959.436827578068915.574599517780371.177337236698804.835588018799172l-3.353455051499623,3.372816122981021,5.944931743950292,5.944946352319675-3.397121659891127,3.397113754070233Z"})
        ]
      );
  }
});

export default Cursor4;
export { Cursor4 };
