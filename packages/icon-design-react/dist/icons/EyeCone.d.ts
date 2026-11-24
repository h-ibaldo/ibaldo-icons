import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeConeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeCone: ForwardRefExoticComponent<EyeConeProps & RefAttributes<SVGSVGElement>>;

export default EyeCone;
export { EyeCone };
