import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserChatWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserChatWide: ForwardRefExoticComponent<UserChatWideProps & RefAttributes<SVGSVGElement>>;

export default UserChatWide;
export { UserChatWide };
