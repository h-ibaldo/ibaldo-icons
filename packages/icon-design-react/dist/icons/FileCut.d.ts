import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCut: ForwardRefExoticComponent<FileCutProps & RefAttributes<SVGSVGElement>>;

export default FileCut;
export { FileCut };
