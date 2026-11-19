import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDown: ForwardRefExoticComponent<ChevronDownProps & RefAttributes<SVGSVGElement>>;

export default ChevronDown;
export { ChevronDown };
