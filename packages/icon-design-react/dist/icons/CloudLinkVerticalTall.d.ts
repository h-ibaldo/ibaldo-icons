import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkVerticalTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkVerticalTall: ForwardRefExoticComponent<CloudLinkVerticalTallProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkVerticalTall;
export { CloudLinkVerticalTall };
