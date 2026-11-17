import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownRightSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownRightSmall: ForwardRefExoticComponent<ChevronDownRightSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownRightSmall;
export { ChevronDownRightSmall };
