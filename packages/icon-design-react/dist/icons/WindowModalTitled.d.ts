import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowModalTitledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowModalTitled: ForwardRefExoticComponent<WindowModalTitledProps & RefAttributes<SVGSVGElement>>;

export default WindowModalTitled;
export { WindowModalTitled };
