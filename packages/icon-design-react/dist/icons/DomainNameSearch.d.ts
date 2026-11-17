import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DomainNameSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DomainNameSearch: ForwardRefExoticComponent<DomainNameSearchProps & RefAttributes<SVGSVGElement>>;

export default DomainNameSearch;
export { DomainNameSearch };
