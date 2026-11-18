import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCut: ForwardRefExoticComponent<FilePlusCutProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCut;
export { FilePlusCut };
