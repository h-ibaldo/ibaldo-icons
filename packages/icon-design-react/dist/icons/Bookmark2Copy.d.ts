import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2CopyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Copy: ForwardRefExoticComponent<Bookmark2CopyProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Copy;
export { Bookmark2Copy };
