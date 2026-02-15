import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4UnlockedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4UnlockedOpen: ForwardRefExoticComponent<Lock4UnlockedOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock4UnlockedOpen;
export { Lock4UnlockedOpen };
