import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListGroupsDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListGroupsDash: ForwardRefExoticComponent<ListGroupsDashProps & RefAttributes<SVGSVGElement>>;

export default ListGroupsDash;
export { ListGroupsDash };
