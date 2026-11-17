import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveUpDown3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveUpDown3: ForwardRefExoticComponent<MoveUpDown3Props & RefAttributes<SVGSVGElement>>;

export default MoveUpDown3;
export { MoveUpDown3 };
