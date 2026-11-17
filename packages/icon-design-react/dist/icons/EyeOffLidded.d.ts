import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeOffLiddedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeOffLidded: ForwardRefExoticComponent<EyeOffLiddedProps & RefAttributes<SVGSVGElement>>;

export default EyeOffLidded;
export { EyeOffLidded };
