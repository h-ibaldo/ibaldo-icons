import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5UnlockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5Unlocked: ForwardRefExoticComponent<Lock5UnlockedProps & RefAttributes<SVGSVGElement>>;

export default Lock5Unlocked;
export { Lock5Unlocked };
