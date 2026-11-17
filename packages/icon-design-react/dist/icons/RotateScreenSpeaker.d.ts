import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenSpeakerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreenSpeaker: ForwardRefExoticComponent<RotateScreenSpeakerProps & RefAttributes<SVGSVGElement>>;

export default RotateScreenSpeaker;
export { RotateScreenSpeaker };
