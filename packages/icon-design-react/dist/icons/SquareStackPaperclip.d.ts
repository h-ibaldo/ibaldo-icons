import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPaperclip: ForwardRefExoticComponent<SquareStackPaperclipProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPaperclip;
export { SquareStackPaperclip };
