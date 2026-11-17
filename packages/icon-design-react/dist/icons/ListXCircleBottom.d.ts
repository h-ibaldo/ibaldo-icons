import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListXCircleBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListXCircleBottom: ForwardRefExoticComponent<ListXCircleBottomProps & RefAttributes<SVGSVGElement>>;

export default ListXCircleBottom;
export { ListXCircleBottom };
