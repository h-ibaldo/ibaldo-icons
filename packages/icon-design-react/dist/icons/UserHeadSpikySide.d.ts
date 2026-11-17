import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSpikySideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSpikySide: ForwardRefExoticComponent<UserHeadSpikySideProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSpikySide;
export { UserHeadSpikySide };
