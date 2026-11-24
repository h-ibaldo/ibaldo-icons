import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveUpDown: ForwardRefExoticComponent<MoveUpDownProps & RefAttributes<SVGSVGElement>>;

export default MoveUpDown;
export { MoveUpDown };
