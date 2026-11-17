import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSearch: ForwardRefExoticComponent<CloudSearchProps & RefAttributes<SVGSVGElement>>;

export default CloudSearch;
export { CloudSearch };
