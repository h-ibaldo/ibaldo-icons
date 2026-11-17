import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock2CheckOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock2CheckOpen: ForwardRefExoticComponent<Lock2CheckOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock2CheckOpen;
export { Lock2CheckOpen };
