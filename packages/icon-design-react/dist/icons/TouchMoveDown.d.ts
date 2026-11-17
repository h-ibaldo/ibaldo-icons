import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchMoveDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchMoveDown: ForwardRefExoticComponent<TouchMoveDownProps & RefAttributes<SVGSVGElement>>;

export default TouchMoveDown;
export { TouchMoveDown };
