import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListTriangleDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListTriangleDash: ForwardRefExoticComponent<ListTriangleDashProps & RefAttributes<SVGSVGElement>>;

export default ListTriangleDash;
export { ListTriangleDash };
