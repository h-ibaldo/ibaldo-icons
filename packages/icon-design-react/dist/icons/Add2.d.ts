import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Add2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Add2: ForwardRefExoticComponent<Add2Props & RefAttributes<SVGSVGElement>>;

export default Add2;
export { Add2 };
