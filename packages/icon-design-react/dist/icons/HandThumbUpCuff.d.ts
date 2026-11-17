import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbUpCuffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbUpCuff: ForwardRefExoticComponent<HandThumbUpCuffProps & RefAttributes<SVGSVGElement>>;

export default HandThumbUpCuff;
export { HandThumbUpCuff };
