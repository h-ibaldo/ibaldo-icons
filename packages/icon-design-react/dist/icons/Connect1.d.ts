import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Connect1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Connect1: ForwardRefExoticComponent<Connect1Props & RefAttributes<SVGSVGElement>>;

export default Connect1;
export { Connect1 };
