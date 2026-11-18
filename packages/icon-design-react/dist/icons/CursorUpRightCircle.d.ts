import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpRightCircle: ForwardRefExoticComponent<CursorUpRightCircleProps & RefAttributes<SVGSVGElement>>;

export default CursorUpRightCircle;
export { CursorUpRightCircle };
