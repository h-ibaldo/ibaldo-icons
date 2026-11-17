import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSpikySideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSpikySide: ForwardRefExoticComponent<UserFaceSpikySideProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSpikySide;
export { UserFaceSpikySide };
