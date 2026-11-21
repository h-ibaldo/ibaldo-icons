import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeadphonesPaddedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeadphonesPadded: ForwardRefExoticComponent<HeadphonesPaddedProps & RefAttributes<SVGSVGElement>>;

export default HeadphonesPadded;
export { HeadphonesPadded };
