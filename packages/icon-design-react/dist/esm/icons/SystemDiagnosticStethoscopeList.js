import { createElement, forwardRef } from 'react';

const SystemDiagnosticStethoscopeList = forwardRef(function SystemDiagnosticStethoscopeList(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('circle', {"cx":"3.949462905189648","cy":"3.000000004136382","r":"1","key":"0"}),
    createElement('circle', {"cx":"11.949462905189648","cy":"3.000000004136382","r":"1","key":"1"}),
    createElement('path', {"d":"M7.949462905189648,15.000000004136382l-.000000001869921,1.000005988640623c-.000000006170012,3.313705189742905,2.686288810440601,5.999994011359377,5.999994000190782,5.999994011359377h.000011999999515c3.313705187310006,0,5.999994002920175-2.686288817825698,5.999994000179868-5.999994005138433l-.000000001649823-2.000005994861567","key":"2"}),
    createElement('circle', {"cx":"19.949462902040068","cy":"12.000000004136382","r":"2","key":"3"}),
    createElement('path', {"d":"M11.949462905189648,3.000000004136382h.999999998510248c.552284749150203,0,.999999998680323.447715249803878.999999998340172.999999998963176l-.00000000234013,3.788897454702237c-.000000001229637,2.006119124936959-1.00260681203963,3.879507087207458-2.67179881976972,4.992301760416012l-3.32820117474057,2.218800785918575-3.328201174729656-2.218800785925851c-1.669192007720085-1.112794673208555-2.671798818520074-2.986182635460864-2.671798819759715-4.992301760375994l-.000000002360139-3.788897454738617c-.000000000330147-.55228474915566.447715249189969-.999999998959538.999999998340172-.999999998959538h.999999998509338","key":"4"})
  );
});

SystemDiagnosticStethoscopeList.displayName = 'SystemDiagnosticStethoscopeList';

export default SystemDiagnosticStethoscopeList;
export { SystemDiagnosticStethoscopeList };
