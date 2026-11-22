import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMusicCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMusicCut: ForwardRefExoticComponent<FileMusicCutProps & RefAttributes<SVGSVGElement>>;

export default FileMusicCut;
export { FileMusicCut };
