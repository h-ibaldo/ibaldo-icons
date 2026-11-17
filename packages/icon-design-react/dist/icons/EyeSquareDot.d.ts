import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeSquareDot: ForwardRefExoticComponent<EyeSquareDotProps & RefAttributes<SVGSVGElement>>;

export default EyeSquareDot;
export { EyeSquareDot };
