import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Folder2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Folder2: ForwardRefExoticComponent<Folder2Props & RefAttributes<SVGSVGElement>>;

export default Folder2;
export { Folder2 };
