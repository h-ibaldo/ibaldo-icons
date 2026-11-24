import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArticlePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArticlePlain: ForwardRefExoticComponent<FileArticlePlainProps & RefAttributes<SVGSVGElement>>;

export default FileArticlePlain;
export { FileArticlePlain };
