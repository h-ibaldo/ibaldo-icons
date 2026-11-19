import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlain: ForwardRefExoticComponent<FilePlainProps & RefAttributes<SVGSVGElement>>;

export default FilePlain;
export { FilePlain };
