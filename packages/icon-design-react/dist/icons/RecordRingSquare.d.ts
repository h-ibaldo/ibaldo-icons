import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RecordRingSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RecordRingSquare: ForwardRefExoticComponent<RecordRingSquareProps & RefAttributes<SVGSVGElement>>;

export default RecordRingSquare;
export { RecordRingSquare };
