import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead8: ForwardRefExoticComponent<UserHead8Props & RefAttributes<SVGSVGElement>>;

export default UserHead8;
export { UserHead8 };
