import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCastCornerPlain: ForwardRefExoticComponent<FileCastCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileCastCornerPlain;
export { FileCastCornerPlain };
