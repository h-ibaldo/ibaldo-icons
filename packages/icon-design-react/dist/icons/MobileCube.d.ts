import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileCubeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileCube: ForwardRefExoticComponent<MobileCubeProps & RefAttributes<SVGSVGElement>>;

export default MobileCube;
export { MobileCube };
