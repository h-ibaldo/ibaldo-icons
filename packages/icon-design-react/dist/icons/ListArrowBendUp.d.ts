import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListArrowBendUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListArrowBendUp: ForwardRefExoticComponent<ListArrowBendUpProps & RefAttributes<SVGSVGElement>>;

export default ListArrowBendUp;
export { ListArrowBendUp };
