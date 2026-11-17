import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5EyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5Eye: ForwardRefExoticComponent<Lock5EyeProps & RefAttributes<SVGSVGElement>>;

export default Lock5Eye;
export { Lock5Eye };
