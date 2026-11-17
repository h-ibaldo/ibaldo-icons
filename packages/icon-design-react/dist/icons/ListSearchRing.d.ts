import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListSearchRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListSearchRing: ForwardRefExoticComponent<ListSearchRingProps & RefAttributes<SVGSVGElement>>;

export default ListSearchRing;
export { ListSearchRing };
