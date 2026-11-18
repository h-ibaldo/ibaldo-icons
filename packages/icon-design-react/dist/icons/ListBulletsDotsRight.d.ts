import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListBulletsDotsRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListBulletsDotsRight: ForwardRefExoticComponent<ListBulletsDotsRightProps & RefAttributes<SVGSVGElement>>;

export default ListBulletsDotsRight;
export { ListBulletsDotsRight };
