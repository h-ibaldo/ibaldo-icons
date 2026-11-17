import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSlash: ForwardRefExoticComponent<CloudSlashProps & RefAttributes<SVGSVGElement>>;

export default CloudSlash;
export { CloudSlash };
