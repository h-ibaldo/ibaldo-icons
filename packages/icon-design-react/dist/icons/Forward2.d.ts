import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Forward2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Forward2: ForwardRefExoticComponent<Forward2Props & RefAttributes<SVGSVGElement>>;

export default Forward2;
export { Forward2 };
