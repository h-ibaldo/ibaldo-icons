import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCircleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCircleCut: ForwardRefExoticComponent<FilePlusCircleCutProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCircleCut;
export { FilePlusCircleCut };
