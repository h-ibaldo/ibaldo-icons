import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceBowlCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceBowlCut: ForwardRefExoticComponent<UserFaceBowlCutProps & RefAttributes<SVGSVGElement>>;

export default UserFaceBowlCut;
export { UserFaceBowlCut };
