import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXCurl: ForwardRefExoticComponent<PaperclipXCurlProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXCurl;
export { PaperclipXCurl };
