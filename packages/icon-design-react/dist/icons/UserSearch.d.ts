import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSearch: ForwardRefExoticComponent<UserSearchProps & RefAttributes<SVGSVGElement>>;

export default UserSearch;
export { UserSearch };
