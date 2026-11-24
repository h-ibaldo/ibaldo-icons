import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MegaphoneRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MegaphoneRays: ForwardRefExoticComponent<MegaphoneRaysProps & RefAttributes<SVGSVGElement>>;

export default MegaphoneRays;
export { MegaphoneRays };
