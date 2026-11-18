import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRectangleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRectangleDashed: ForwardRefExoticComponent<CursorRectangleDashedProps & RefAttributes<SVGSVGElement>>;

export default CursorRectangleDashed;
export { CursorRectangleDashed };
