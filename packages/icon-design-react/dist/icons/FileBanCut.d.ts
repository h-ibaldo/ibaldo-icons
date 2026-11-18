import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBanCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBanCut: ForwardRefExoticComponent<FileBanCutProps & RefAttributes<SVGSVGElement>>;

export default FileBanCut;
export { FileBanCut };
