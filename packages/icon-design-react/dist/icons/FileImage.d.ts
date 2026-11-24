import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImage: ForwardRefExoticComponent<FileImageProps & RefAttributes<SVGSVGElement>>;

export default FileImage;
export { FileImage };
