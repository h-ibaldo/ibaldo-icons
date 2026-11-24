import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PictureInPictureArrowUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PictureInPictureArrowUpLeft: ForwardRefExoticComponent<PictureInPictureArrowUpLeftProps & RefAttributes<SVGSVGElement>>;

export default PictureInPictureArrowUpLeft;
export { PictureInPictureArrowUpLeft };
