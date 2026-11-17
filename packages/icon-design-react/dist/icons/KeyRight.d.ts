import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyRight: ForwardRefExoticComponent<KeyRightProps & RefAttributes<SVGSVGElement>>;

export default KeyRight;
export { KeyRight };
