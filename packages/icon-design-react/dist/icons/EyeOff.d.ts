import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeOff: ForwardRefExoticComponent<EyeOffProps & RefAttributes<SVGSVGElement>>;

export default EyeOff;
export { EyeOff };
