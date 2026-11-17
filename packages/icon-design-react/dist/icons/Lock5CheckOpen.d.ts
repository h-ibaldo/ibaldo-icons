import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5CheckOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5CheckOpen: ForwardRefExoticComponent<Lock5CheckOpenProps & RefAttributes<SVGSVGElement>>;

export default Lock5CheckOpen;
export { Lock5CheckOpen };
