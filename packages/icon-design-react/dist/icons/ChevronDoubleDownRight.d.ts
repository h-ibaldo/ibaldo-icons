import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleDownRight: ForwardRefExoticComponent<ChevronDoubleDownRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleDownRight;
export { ChevronDoubleDownRight };
