import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1CirclePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1CirclePlus: ForwardRefExoticComponent<Bookmark1CirclePlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1CirclePlus;
export { Bookmark1CirclePlus };
