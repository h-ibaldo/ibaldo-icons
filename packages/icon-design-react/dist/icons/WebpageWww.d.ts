import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebpageWwwProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebpageWww: ForwardRefExoticComponent<WebpageWwwProps & RefAttributes<SVGSVGElement>>;

export default WebpageWww;
export { WebpageWww };
