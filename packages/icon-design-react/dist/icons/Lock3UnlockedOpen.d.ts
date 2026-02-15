import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3UnlockedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3UnlockedOpen: ForwardRefExoticComponent<Lock3UnlockedOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock3UnlockedOpen;
export { Lock3UnlockedOpen };
