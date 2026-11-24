import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PictureInPictureArrowDownRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PictureInPictureArrowDownRight: ForwardRefExoticComponent<PictureInPictureArrowDownRightProps & RefAttributes<SVGSVGElement>>;

export default PictureInPictureArrowDownRight;
export { PictureInPictureArrowDownRight };
