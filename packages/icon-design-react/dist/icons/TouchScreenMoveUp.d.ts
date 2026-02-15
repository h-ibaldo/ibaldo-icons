import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenMoveUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenMoveUp: ForwardRefExoticComponent<TouchScreenMoveUpProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenMoveUp;
export { TouchScreenMoveUp };
