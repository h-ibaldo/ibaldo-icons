import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserChat: ForwardRefExoticComponent<UserChatProps & RefAttributes<SVGSVGElement>>;

export default UserChat;
export { UserChat };
