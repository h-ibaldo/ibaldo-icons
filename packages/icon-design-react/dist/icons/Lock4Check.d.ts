import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Check: ForwardRefExoticComponent<Lock4CheckProps & RefAttributes<SVGSVGElement>>;

export default Lock4Check;
export { Lock4Check };
