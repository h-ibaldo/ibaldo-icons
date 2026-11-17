import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusCurl: ForwardRefExoticComponent<PaperclipMinusCurlProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusCurl;
export { PaperclipMinusCurl };
