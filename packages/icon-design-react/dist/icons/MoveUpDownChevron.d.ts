import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveUpDownChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveUpDownChevron: ForwardRefExoticComponent<MoveUpDownChevronProps & RefAttributes<SVGSVGElement>>;

export default MoveUpDownChevron;
export { MoveUpDownChevron };
