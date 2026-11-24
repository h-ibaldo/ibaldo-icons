import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListPlusDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListPlusDash: ForwardRefExoticComponent<ListPlusDashProps & RefAttributes<SVGSVGElement>>;

export default ListPlusDash;
export { ListPlusDash };
