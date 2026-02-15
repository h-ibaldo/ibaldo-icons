import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock2UnlockedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock2UnlockedOpen: ForwardRefExoticComponent<Lock2UnlockedOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock2UnlockedOpen;
export { Lock2UnlockedOpen };
