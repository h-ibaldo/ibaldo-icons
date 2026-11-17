import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShelfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Shelf: ForwardRefExoticComponent<ShelfProps & RefAttributes<SVGSVGElement>>;

export default Shelf;
export { Shelf };
