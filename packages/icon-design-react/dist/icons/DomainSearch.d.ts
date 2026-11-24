import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DomainSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DomainSearch: ForwardRefExoticComponent<DomainSearchProps & RefAttributes<SVGSVGElement>>;

export default DomainSearch;
export { DomainSearch };
