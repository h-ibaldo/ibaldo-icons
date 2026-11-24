import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserStarWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserStarWide: ForwardRefExoticComponent<UserStarWideProps & RefAttributes<SVGSVGElement>>;

export default UserStarWide;
export { UserStarWide };
