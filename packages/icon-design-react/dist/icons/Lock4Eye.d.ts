import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4EyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Eye: ForwardRefExoticComponent<Lock4EyeProps & RefAttributes<SVGSVGElement>>;

export default Lock4Eye;
export { Lock4Eye };
