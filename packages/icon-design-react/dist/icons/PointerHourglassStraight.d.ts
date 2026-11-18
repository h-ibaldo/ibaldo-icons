import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerHourglassStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerHourglassStraight: ForwardRefExoticComponent<PointerHourglassStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerHourglassStraight;
export { PointerHourglassStraight };
