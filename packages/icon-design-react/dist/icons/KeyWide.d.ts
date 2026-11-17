import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyWide: ForwardRefExoticComponent<KeyWideProps & RefAttributes<SVGSVGElement>>;

export default KeyWide;
export { KeyWide };
