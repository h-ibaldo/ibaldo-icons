import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpRightSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpRightSmall: ForwardRefExoticComponent<ChevronUpRightSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpRightSmall;
export { ChevronUpRightSmall };
