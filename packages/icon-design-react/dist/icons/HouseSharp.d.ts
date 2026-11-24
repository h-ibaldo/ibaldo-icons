import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseSharp: ForwardRefExoticComponent<HouseSharpProps & RefAttributes<SVGSVGElement>>;

export default HouseSharp;
export { HouseSharp };
