import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveCheck: ForwardRefExoticComponent<SaveCheckProps & RefAttributes<SVGSVGElement>>;

export default SaveCheck;
export { SaveCheck };
