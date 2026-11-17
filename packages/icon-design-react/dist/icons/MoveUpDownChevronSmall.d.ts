import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveUpDownChevronSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveUpDownChevronSmall: ForwardRefExoticComponent<MoveUpDownChevronSmallProps & RefAttributes<SVGSVGElement>>;

export default MoveUpDownChevronSmall;
export { MoveUpDownChevronSmall };
