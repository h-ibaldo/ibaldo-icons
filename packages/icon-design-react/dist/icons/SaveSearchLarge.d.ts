import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearchLarge: ForwardRefExoticComponent<SaveSearchLargeProps & RefAttributes<SVGSVGElement>>;

export default SaveSearchLarge;
export { SaveSearchLarge };
