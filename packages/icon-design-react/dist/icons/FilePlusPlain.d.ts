import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusPlain: ForwardRefExoticComponent<FilePlusPlainProps & RefAttributes<SVGSVGElement>>;

export default FilePlusPlain;
export { FilePlusPlain };
