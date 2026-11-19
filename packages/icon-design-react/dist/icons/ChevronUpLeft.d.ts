import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpLeft: ForwardRefExoticComponent<ChevronUpLeftProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpLeft;
export { ChevronUpLeft };
