import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRight: ForwardRefExoticComponent<ChevronRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronRight;
export { ChevronRight };
