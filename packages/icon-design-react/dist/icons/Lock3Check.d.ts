import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Check: ForwardRefExoticComponent<Lock3CheckProps & RefAttributes<SVGSVGElement>>;

export default Lock3Check;
export { Lock3Check };
