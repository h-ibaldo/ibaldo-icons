import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Folder42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Folder42: ForwardRefExoticComponent<Folder42Props & RefAttributes<SVGSVGElement>>;

export default Folder42;
export { Folder42 };
