import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleRight: ForwardRefExoticComponent<ChevronDoubleRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleRight;
export { ChevronDoubleRight };
