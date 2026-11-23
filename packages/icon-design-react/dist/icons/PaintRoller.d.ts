import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintRollerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintRoller: ForwardRefExoticComponent<PaintRollerProps & RefAttributes<SVGSVGElement>>;

export default PaintRoller;
export { PaintRoller };
