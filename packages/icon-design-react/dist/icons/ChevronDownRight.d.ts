import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownRight: ForwardRefExoticComponent<ChevronDownRightProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownRight;
export { ChevronDownRight };
