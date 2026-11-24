import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackLinesCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackLinesCut: ForwardRefExoticComponent<FileStackLinesCutProps & RefAttributes<SVGSVGElement>>;

export default FileStackLinesCut;
export { FileStackLinesCut };
