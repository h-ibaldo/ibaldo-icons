import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3CheckOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3CheckOpen: ForwardRefExoticComponent<Lock3CheckOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock3CheckOpen;
export { Lock3CheckOpen };
