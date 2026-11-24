import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCirclePlain: ForwardRefExoticComponent<FilePlusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCirclePlain;
export { FilePlusCirclePlain };
