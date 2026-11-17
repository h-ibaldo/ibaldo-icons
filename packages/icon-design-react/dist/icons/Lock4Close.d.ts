import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Close: ForwardRefExoticComponent<Lock4CloseProps & RefAttributes<SVGSVGElement>>;

export default Lock4Close;
export { Lock4Close };
