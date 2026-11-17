import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPaperclipTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPaperclipTilted: ForwardRefExoticComponent<SquareStackPaperclipTiltedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPaperclipTilted;
export { SquareStackPaperclipTilted };
