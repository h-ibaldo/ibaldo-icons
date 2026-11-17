import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5Check: ForwardRefExoticComponent<Lock5CheckProps & RefAttributes<SVGSVGElement>>;

export default Lock5Check;
export { Lock5Check };
