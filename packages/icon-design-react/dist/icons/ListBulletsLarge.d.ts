import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListBulletsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListBulletsLarge: ForwardRefExoticComponent<ListBulletsLargeProps & RefAttributes<SVGSVGElement>>;

export default ListBulletsLarge;
export { ListBulletsLarge };
