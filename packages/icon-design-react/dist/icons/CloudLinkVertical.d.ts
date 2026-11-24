import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkVertical: ForwardRefExoticComponent<CloudLinkVerticalProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkVertical;
export { CloudLinkVertical };
