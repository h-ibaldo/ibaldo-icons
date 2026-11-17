import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyPlain: ForwardRefExoticComponent<KeyPlainProps & RefAttributes<SVGSVGElement>>;

export default KeyPlain;
export { KeyPlain };
