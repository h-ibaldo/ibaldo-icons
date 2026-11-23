import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MagnetRightSparkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MagnetRightSpark: ForwardRefExoticComponent<MagnetRightSparkProps & RefAttributes<SVGSVGElement>>;

export default MagnetRightSpark;
export { MagnetRightSpark };
