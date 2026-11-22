import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListChevronUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListChevronUpDown: ForwardRefExoticComponent<ListChevronUpDownProps & RefAttributes<SVGSVGElement>>;

export default ListChevronUpDown;
export { ListChevronUpDown };
