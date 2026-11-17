import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerCuffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointerCuff: ForwardRefExoticComponent<HandPointerCuffProps & RefAttributes<SVGSVGElement>>;

export default HandPointerCuff;
export { HandPointerCuff };
