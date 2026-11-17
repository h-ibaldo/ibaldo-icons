import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VRCubeDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VRCubeDashed: ForwardRefExoticComponent<VRCubeDashedProps & RefAttributes<SVGSVGElement>>;

export default VRCubeDashed;
export { VRCubeDashed };
