import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoveHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoveHand: ForwardRefExoticComponent<MoveHandProps & RefAttributes<SVGSVGElement>>;

export default MoveHand;
export { MoveHand };
