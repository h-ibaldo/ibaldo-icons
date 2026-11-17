import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3EyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Eye: ForwardRefExoticComponent<Lock3EyeProps & RefAttributes<SVGSVGElement>>;

export default Lock3Eye;
export { Lock3Eye };
