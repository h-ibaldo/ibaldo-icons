import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Plus: ForwardRefExoticComponent<Bookmark2PlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Plus;
export { Bookmark2Plus };
