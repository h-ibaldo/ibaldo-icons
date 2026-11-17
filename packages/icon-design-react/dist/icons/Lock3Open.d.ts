import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3OpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Open: ForwardRefExoticComponent<Lock3OpenProps & RefAttributes<SVGSVGElement>>;

export default Lock3Open;
export { Lock3Open };
