import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenMoveRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenMoveRight: ForwardRefExoticComponent<TouchScreenMoveRightProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenMoveRight;
export { TouchScreenMoveRight };
