import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchForceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchForce: ForwardRefExoticComponent<TouchForceProps & RefAttributes<SVGSVGElement>>;

export default TouchForce;
export { TouchForce };
