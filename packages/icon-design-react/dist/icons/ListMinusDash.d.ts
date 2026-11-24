import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListMinusDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListMinusDash: ForwardRefExoticComponent<ListMinusDashProps & RefAttributes<SVGSVGElement>>;

export default ListMinusDash;
export { ListMinusDash };
