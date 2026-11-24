import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperCornerFoldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperCornerFold: ForwardRefExoticComponent<NewspaperCornerFoldProps & RefAttributes<SVGSVGElement>>;

export default NewspaperCornerFold;
export { NewspaperCornerFold };
