import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCastPlain: ForwardRefExoticComponent<FileCastPlainProps & RefAttributes<SVGSVGElement>>;

export default FileCastPlain;
export { FileCastPlain };
