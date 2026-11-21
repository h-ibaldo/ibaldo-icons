import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeadphonesTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeadphonesTilted: ForwardRefExoticComponent<HeadphonesTiltedProps & RefAttributes<SVGSVGElement>>;

export default HeadphonesTilted;
export { HeadphonesTilted };
