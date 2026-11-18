import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckCurl: ForwardRefExoticComponent<PaperclipCheckCurlProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckCurl;
export { PaperclipCheckCurl };
