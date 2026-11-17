import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSearch: ForwardRefExoticComponent<ListSearchProps & RefAttributes<SVGSVGElement>>;

export default ListSearch;
export { ListSearch };
