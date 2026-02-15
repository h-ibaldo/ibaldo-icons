import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebpageWwwFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebpageWwwFile: ForwardRefExoticComponent<WebpageWwwFileProps & RefAttributes<SVGSVGElement>>;

export default WebpageWwwFile;
export { WebpageWwwFile };
