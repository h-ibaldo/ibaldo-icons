import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ForwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Forward: ForwardRefExoticComponent<ForwardProps & RefAttributes<SVGSVGElement>>;

export default Forward;
export { Forward };
