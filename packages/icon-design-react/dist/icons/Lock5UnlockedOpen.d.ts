import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5UnlockedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5UnlockedOpen: ForwardRefExoticComponent<Lock5UnlockedOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock5UnlockedOpen;
export { Lock5UnlockedOpen };
