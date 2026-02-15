import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Connect2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Connect2: ForwardRefExoticComponent<Connect2Props & RefAttributes<SVGSVGElement>>;

export default Connect2;
export { Connect2 };
