import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRightSmall: ForwardRefExoticComponent<ChevronRightSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronRightSmall;
export { ChevronRightSmall };
