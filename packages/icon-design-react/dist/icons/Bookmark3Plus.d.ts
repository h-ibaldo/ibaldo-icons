import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Plus: ForwardRefExoticComponent<Bookmark3PlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Plus;
export { Bookmark3Plus };
