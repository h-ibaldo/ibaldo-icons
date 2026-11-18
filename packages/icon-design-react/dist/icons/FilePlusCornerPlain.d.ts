import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCornerPlain: ForwardRefExoticComponent<FilePlusCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCornerPlain;
export { FilePlusCornerPlain };
