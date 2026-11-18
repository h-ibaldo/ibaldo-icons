import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlus: ForwardRefExoticComponent<FilePlusProps & RefAttributes<SVGSVGElement>>;

export default FilePlus;
export { FilePlus };
