import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorCircle: ForwardRefExoticComponent<CursorCircleProps & RefAttributes<SVGSVGElement>>;

export default CursorCircle;
export { CursorCircle };
