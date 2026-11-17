import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkVariantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkVariant: ForwardRefExoticComponent<CloudLinkVariantProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkVariant;
export { CloudLinkVariant };
