import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenMoveDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenMoveDown: ForwardRefExoticComponent<TouchScreenMoveDownProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenMoveDown;
export { TouchScreenMoveDown };
