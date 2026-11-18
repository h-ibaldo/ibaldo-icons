import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCurl: ForwardRefExoticComponent<PaperclipCurlProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCurl;
export { PaperclipCurl };
