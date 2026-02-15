import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenMoveLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenMoveLeft: ForwardRefExoticComponent<TouchScreenMoveLeftProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenMoveLeft;
export { TouchScreenMoveLeft };
