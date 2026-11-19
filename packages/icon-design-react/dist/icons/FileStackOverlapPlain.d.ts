import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackOverlapPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackOverlapPlain: ForwardRefExoticComponent<FileStackOverlapPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStackOverlapPlain;
export { FileStackOverlapPlain };
