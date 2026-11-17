import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowModalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowModal: ForwardRefExoticComponent<WindowModalProps & RefAttributes<SVGSVGElement>>;

export default WindowModal;
export { WindowModal };
