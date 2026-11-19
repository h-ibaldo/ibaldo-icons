import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBanPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBanPlain: ForwardRefExoticComponent<FileBanPlainProps & RefAttributes<SVGSVGElement>>;

export default FileBanPlain;
export { FileBanPlain };
