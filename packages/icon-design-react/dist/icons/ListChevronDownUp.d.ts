import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListChevronDownUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListChevronDownUp: ForwardRefExoticComponent<ListChevronDownUpProps & RefAttributes<SVGSVGElement>>;

export default ListChevronDownUp;
export { ListChevronDownUp };
