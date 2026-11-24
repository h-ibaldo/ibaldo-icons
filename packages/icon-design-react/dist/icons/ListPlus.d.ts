import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListPlus: ForwardRefExoticComponent<ListPlusProps & RefAttributes<SVGSVGElement>>;

export default ListPlus;
export { ListPlus };
