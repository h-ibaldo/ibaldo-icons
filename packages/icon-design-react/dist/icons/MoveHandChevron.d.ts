import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveHandChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveHandChevron: ForwardRefExoticComponent<MoveHandChevronProps & RefAttributes<SVGSVGElement>>;

export default MoveHandChevron;
export { MoveHandChevron };
