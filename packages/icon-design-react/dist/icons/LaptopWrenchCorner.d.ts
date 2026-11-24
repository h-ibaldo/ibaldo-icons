import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopWrenchCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopWrenchCorner: ForwardRefExoticComponent<LaptopWrenchCornerProps & RefAttributes<SVGSVGElement>>;

export default LaptopWrenchCorner;
export { LaptopWrenchCorner };
