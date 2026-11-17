import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Trash: ForwardRefExoticComponent<TrashProps & RefAttributes<SVGSVGElement>>;

export default Trash;
export { Trash };
