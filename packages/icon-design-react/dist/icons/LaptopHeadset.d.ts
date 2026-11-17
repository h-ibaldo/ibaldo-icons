import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopHeadsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopHeadset: ForwardRefExoticComponent<LaptopHeadsetProps & RefAttributes<SVGSVGElement>>;

export default LaptopHeadset;
export { LaptopHeadset };
