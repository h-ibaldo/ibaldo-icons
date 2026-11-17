import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Close: ForwardRefExoticComponent<Bookmark2CloseProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Close;
export { Bookmark2Close };
