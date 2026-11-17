import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeypadJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeypadJoined: ForwardRefExoticComponent<KeypadJoinedProps & RefAttributes<SVGSVGElement>>;

export default KeypadJoined;
export { KeypadJoined };
