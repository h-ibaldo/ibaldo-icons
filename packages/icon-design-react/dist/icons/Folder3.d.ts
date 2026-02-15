import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Folder3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Folder3: ForwardRefExoticComponent<Folder3Props & RefAttributes<SVGSVGElement>>;

export default Folder3;
export { Folder3 };
