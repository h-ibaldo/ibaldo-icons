import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpCurl: ForwardRefExoticComponent<PaperclipArrowUpCurlProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpCurl;
export { PaperclipArrowUpCurl };
