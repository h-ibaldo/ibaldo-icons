import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownLeft: ForwardRefExoticComponent<ChevronDownLeftProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownLeft;
export { ChevronDownLeft };
