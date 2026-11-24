import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchMoveRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchMoveRight: ForwardRefExoticComponent<TouchMoveRightProps & RefAttributes<SVGSVGElement>>;

export default TouchMoveRight;
export { TouchMoveRight };
