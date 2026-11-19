import { defineComponent, h } from 'vue';

const UploadTriangle = defineComponent({
  name: 'UploadTriangle',
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
          h('path', {"d":"M1.974731450033687,17.000000000459295v1c0,1.10456949966283.895430500334442,2,2,2h16c1.104569499661011,0,2-.89543050033717,2-2v-.999999999997272"}),
          h('path', {"d":"M15.883837655694151,12.983084648391923l-7.818212412205867-.000000000700311c-1.201508299824127-.00000000010732-1.91538195519297-1.34209445939905-1.243818772856685-2.338400178884513l3.90910620662271-5.79940201336376c.594604745189827-.882133094919482,1.89303280110471-.882133094800338,2.487637546136284.000000000221917l3.909106205581338,5.799402014069528c.671563182154387.996305719603697-.042310473452744,2.338400178767188-1.243818773277781,2.338400178657139Z"})
        ]
      );
  }
});

export default UploadTriangle;
export { UploadTriangle };
