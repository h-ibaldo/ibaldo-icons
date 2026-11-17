import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSquareDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSquareDown: ForwardRefExoticComponent<SaveSquareDownProps & RefAttributes<SVGSVGElement>>;

export default SaveSquareDown;
export { SaveSquareDown };
