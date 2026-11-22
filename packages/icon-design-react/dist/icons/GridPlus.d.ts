import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridPlus: ForwardRefExoticComponent<GridPlusProps & RefAttributes<SVGSVGElement>>;

export default GridPlus;
export { GridPlus };
