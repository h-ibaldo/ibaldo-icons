import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbDownCuffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbDownCuff: ForwardRefExoticComponent<HandThumbDownCuffProps & RefAttributes<SVGSVGElement>>;

export default HandThumbDownCuff;
export { HandThumbDownCuff };
