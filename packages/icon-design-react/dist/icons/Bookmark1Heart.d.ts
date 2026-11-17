import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1HeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Heart: ForwardRefExoticComponent<Bookmark1HeartProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Heart;
export { Bookmark1Heart };
