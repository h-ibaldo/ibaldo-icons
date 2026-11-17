import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollUser: ForwardRefExoticComponent<PollUserProps & RefAttributes<SVGSVGElement>>;

export default PollUser;
export { PollUser };
