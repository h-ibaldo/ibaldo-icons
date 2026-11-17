import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRemoveAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRemoveAlt: ForwardRefExoticComponent<CloudRemoveAltProps & RefAttributes<SVGSVGElement>>;

export default CloudRemoveAlt;
export { CloudRemoveAlt };
