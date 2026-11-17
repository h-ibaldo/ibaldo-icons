import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3KeyholeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Keyhole: ForwardRefExoticComponent<Lock3KeyholeProps & RefAttributes<SVGSVGElement>>;

export default Lock3Keyhole;
export { Lock3Keyhole };
