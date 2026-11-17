import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5Close: ForwardRefExoticComponent<Lock5CloseProps & RefAttributes<SVGSVGElement>>;

export default Lock5Close;
export { Lock5Close };
