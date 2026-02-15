import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrDeviceGlassesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrDeviceGlasses: ForwardRefExoticComponent<VrDeviceGlassesProps & RefAttributes<SVGSVGElement>>;

export default VrDeviceGlasses;
export { VrDeviceGlasses };
