import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPaperclipCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPaperclipCurl: ForwardRefExoticComponent<SquareStackPaperclipCurlProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPaperclipCurl;
export { SquareStackPaperclipCurl };
