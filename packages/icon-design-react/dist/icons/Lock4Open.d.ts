import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4OpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Open: ForwardRefExoticComponent<Lock4OpenProps & RefAttributes<SVGSVGElement>>;

export default Lock4Open;
export { Lock4Open };
