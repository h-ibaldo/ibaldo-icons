import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusCornerWide: ForwardRefExoticComponent<FilePlusCornerWideProps & RefAttributes<SVGSVGElement>>;

export default FilePlusCornerWide;
export { FilePlusCornerWide };
