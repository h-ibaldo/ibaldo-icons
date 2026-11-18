import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCircle: ForwardRefExoticComponent<FilePlusCircleProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCircle;
export { FilePlusCircle };
