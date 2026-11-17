import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock2Check: ForwardRefExoticComponent<Lock2CheckProps & RefAttributes<SVGSVGElement>>;

export default Lock2Check;
export { Lock2Check };
