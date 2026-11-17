import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRGlassesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRGlasses: ForwardRefExoticComponent<VRGlassesProps & RefAttributes<SVGSVGElement>>;

export default VRGlasses;
export { VRGlasses };
