import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RecordSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RecordSquare: ForwardRefExoticComponent<RecordSquareProps & RefAttributes<SVGSVGElement>>;

export default RecordSquare;
export { RecordSquare };
