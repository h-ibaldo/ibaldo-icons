import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkTall: ForwardRefExoticComponent<CloudLinkTallProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkTall;
export { CloudLinkTall };
