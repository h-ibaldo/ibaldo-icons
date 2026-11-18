import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUp: ForwardRefExoticComponent<ChevronUpProps & RefAttributes<SVGSVGElement>>;

export default ChevronUp;
export { ChevronUp };
