import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMusicDoubleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMusicDoubleCut: ForwardRefExoticComponent<FileMusicDoubleCutProps & RefAttributes<SVGSVGElement>>;

export default FileMusicDoubleCut;
export { FileMusicDoubleCut };
