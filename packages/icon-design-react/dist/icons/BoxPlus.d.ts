import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxPlus: ForwardRefExoticComponent<BoxPlusProps & RefAttributes<SVGSVGElement>>;

export default BoxPlus;
export { BoxPlus };
