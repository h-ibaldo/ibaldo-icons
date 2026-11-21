import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhonePauseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhonePause: ForwardRefExoticComponent<PhonePauseProps & RefAttributes<SVGSVGElement>>;

export default PhonePause;
export { PhonePause };
