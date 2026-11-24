import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCornerCut: ForwardRefExoticComponent<FilePlusCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCornerCut;
export { FilePlusCornerCut };
